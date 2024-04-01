import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
export async function GET() {
  try {
    const response = await prisma.widgetObject.findMany({});
    return NextResponse.json(response);
  } catch (err) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
