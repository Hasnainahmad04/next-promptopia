import Prompt from "@models/prompt";
import { ConnectToDatabase } from "@utils/database";
import { NextRequest, NextResponse } from "next/server";

const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await ConnectToDatabase();
    const post = await Prompt.findOne({ _id: params.id }).populate("creator");
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
};

const PATCH = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { prompt, tag } = await req.json();
  try {
    await ConnectToDatabase();
    await Prompt.findOneAndUpdate({ _id: params.id }, { prompt, tag });
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error Updating post" }, { status: 500 });
  }
};

const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await ConnectToDatabase();
    await Prompt.findByIdAndDelete(params.id);
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error deleting post" }, { status: 500 });
  }
};

export { GET, PATCH, DELETE };
