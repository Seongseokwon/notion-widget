import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import JWT from "@/libs/jwt";

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

    const jwt = new JWT();

    const accessToken = await jwt.accessToken(other);
    const refreshToken = await jwt.refreshToken(other.id);

    const response = new NextResponse("Login Success", { status: 200 });
    response.headers.set("access-token", accessToken);
    response.headers.set("refresh-token", refreshToken);
    response.cookies.set("UAT", accessToken);
    response.cookies.set("URT", refreshToken);
    return response;
  } catch (err) {
    console.log(err);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
