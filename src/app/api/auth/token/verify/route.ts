import JWT from "@/libs/jwt";
import { JwtPayload } from "jsonwebtoken";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { generateToken, returnResponseWithToken } from "../../(common)/token";

export async function GET(req: NextRequest) {
  try {
    const headerList = headers();

    if (!headerList.get("Authorization")) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const [_, aToken] = headerList.get("Authorization")!.split(" ");
    const jwt = new JWT();
    const decodeUser = (await jwt.expiredCheck(aToken)) as JwtPayload;
    delete decodeUser["iat"];
    delete decodeUser["exp"];

    return returnResponseWithToken(
      await generateToken(decodeUser),
      "Session Login Success"
    );
  } catch (err: any) {
    if (err.name.includes("TokenExpiredError")) {
      return new NextResponse("token expired", { status: 401 });
    }
    return new NextResponse(err, { status: 500 });
  }
}
