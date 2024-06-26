import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/libs/prisma";
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, nickname, password } = body;

    const hashedPw = await bcrypt.hash(password, 10);

    const response = await prisma.user.create({
      data: {
        email,
        nickname,
        hashedPassword: hashedPw,
      },
    });

    const { hashedPassword, ...removePw } = response;
    return new NextResponse("Register Success", { status: 201 });
  } catch (err: any) {
    console.log(err.meta);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

/**
 * POST api/auth/register
 * body : {
 *  email, nickname, password
 * }
 */
