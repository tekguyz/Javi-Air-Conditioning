import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("NEW JAVI AIR LEAD:", data);
    return NextResponse.json({ success: true, message: "Lead recorded" }, { status: 200 });
  } catch (error) {
    console.error("API submit error:", error);
    return NextResponse.json({ success: false, error: "Invalid data" }, { status: 400 });
  }
}
