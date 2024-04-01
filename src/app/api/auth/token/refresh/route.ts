import JWT from "@/libs/jwt";
import { JwtPayload } from "jsonwebtoken";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { generateToken, returnResponseWithToken } from "../../(common)/token";
export async function POST(req: NextRequest) {
  try {
    const headerList = headers();

    if (!headerList.get("Refresh")) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const jwt = new JWT();
    const [_, rToken] = headerList.get("Refresh")!.split(" ");
    const verified = (await jwt.expiredCheck(rToken)) as JwtPayload;

    const { id } = verified;

    const findUser = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!findUser) {
      return new NextResponse("Not exist User", { status: 400 });
    }
    const { hashedPassword, ...other } = findUser;

    return returnResponseWithToken(
      await generateToken(other),
      "Token Update Success"
    );
  } catch (err) {
    return new NextResponse("Refresh token is expired", { status: 500 });
  }
}
