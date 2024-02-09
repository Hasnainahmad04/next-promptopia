import Prompt from "@models/prompt";
import { ConnectToDatabase } from "@utils/database";
import {NextRequest, NextResponse} from "next/server";

export const dynamic = "force-dynamic";

export const GET = async (req: NextRequest) => {
  try {
    await ConnectToDatabase();
    const Prompts = await Prompt.find({}).populate("creator");
    return NextResponse.json(Prompts, { status: 200, url: req.url });
  } catch (error) {
    return NextResponse.json("Error Fetching Prompts", { status: 500, url: req.url });
  }
};
