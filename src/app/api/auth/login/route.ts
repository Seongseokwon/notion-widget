import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import JWT from "@/libs/jwt";

import prisma from "@/libs/prisma";
import { generateToken, returnResponseWithToken } from "../(common)/token";
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { email, password } = body;

    const targetUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!targetUser) {
      return new NextResponse("Not exist User email", { status: 400 });
    }
    const { hashedPassword, ...other } = targetUser;

    const pwCheck = await bcrypt.compare(password, hashedPassword);

    if (!pwCheck) {
      return new NextResponse("Wrong password", { status: 400 });
    }

    return returnResponseWithToken(await generateToken(other), "Login Success");
  } catch (err) {
    console.log(err);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
