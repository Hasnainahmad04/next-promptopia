import Prompt from "@models/prompt";
import { ConnectToDatabase } from "@utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await ConnectToDatabase();
    const Prompts = await Prompt.find({}).populate("creator");
    return NextResponse.json(Prompts, { status: 200 });
  } catch (error) {
    return NextResponse.json("Error Fetching Prompts", { status: 500 });
  }
};
