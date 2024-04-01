import { NextResponse } from "next/server";

export async function GET() {
  const response = new NextResponse("logout success", { status: 200 });

  response.cookies.delete("UAT");
  response.cookies.delete("URT");
  return response;
}
