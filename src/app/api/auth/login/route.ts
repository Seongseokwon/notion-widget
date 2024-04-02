import { NextRequest, NextResponse } from "next/server";
import { generateToken, returnResponseWithToken } from "../(common)/token";
import bcrypt from "bcrypt";
import prisma from "@/libs/prisma";
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

    return returnResponseWithToken(await generateToken(other), {
      user: other,
      message: "Login Success",
    });
  } catch (err) {
    console.log(err);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
