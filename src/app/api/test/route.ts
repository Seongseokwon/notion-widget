import JWT from "@/libs/jwt";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const headerList = headers();

    if (!headerList.get("Authorization")) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const [_, accessToken] = headerList.get("Authorization")!.split(" ");
    const jwt = new JWT();
    const verified: any = await jwt.expiredCheck(accessToken);

    return NextResponse.json("test");
  } catch (err: any) {
    if (err.name.includes("TokenExpiredError")) {
      return new NextResponse("token expired", { status: 401 });
    }
    return new NextResponse(err, { status: 500 });
  }
}
