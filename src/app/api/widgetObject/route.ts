import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
export async function GET() {
  try {
    const response = await prisma.widgetObject.findMany({
      select: {
        id: true,
        type: true,
        name: true,
        attributes: true,
      },
    });
    const widgetObjectMap = new Map();

    console.log(response);
    return NextResponse.json(response);
  } catch (err) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
