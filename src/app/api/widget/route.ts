import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(body);
    const { type, name, attributes } = body;
    const response = await prisma.widgetObject.create({
      data: {
        type,
        name,
        attributes,
      },
    });
    return NextResponse.json("success");
  } catch (err) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
