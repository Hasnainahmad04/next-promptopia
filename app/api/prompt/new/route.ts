import Prompt from "@models/prompt";
import { ConnectToDatabase } from "@utils/database";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { userId, prompt, tag } = await req.json();

  try {
    await ConnectToDatabase();
    const newPrompt = await Prompt.create({
      creator: userId,
      prompt,
      tag,
    });

    return NextResponse.json(newPrompt, { status: 201 });
  } catch (error) {
    return NextResponse.json("Failed to create a new prompt", { status: 500 });
  }
};
