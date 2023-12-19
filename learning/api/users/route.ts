import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const users = [
    { id: 1, name: "Cap America", gender: "Male" },
    { id: 2, name: "Hasnain", gender: "Male" },
    { id: 3, name: "Babar Azam", gender: "Male" },
    { id: 4, name: "V Kohli", gender: "Male" },
    { id: 5, name: "Tony Stark", gender: "Male" },
  ];
  return NextResponse.json(users, { status: 200 });
}
