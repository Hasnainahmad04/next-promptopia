import Prompt from "@models/prompt";
import { ConnectToDatabase } from "@utils/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await ConnectToDatabase();
    const Prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );
    return NextResponse.json(Prompts, { status: 200 });
  } catch (error) {
    return NextResponse.json("Error Fetching Prompts", { status: 500 });
  }
};
