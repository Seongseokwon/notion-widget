import JWT from "@/libs/jwt";
import { UserWithoutPw } from "@/types/user";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";

interface ResponseBody {
  user: UserWithoutPw;
  message: string;
}
export const generateToken = async (payload: any) => {
  const jwt = new JWT();

  return {
    accessToken: await jwt.accessToken(payload),
    refreshToken: await jwt.refreshToken(payload.id),
  };
};
export const returnResponseWithToken = (
  token: Record<"accessToken" | "refreshToken", string>,
  body: ResponseBody
) => {
  const response = new NextResponse(JSON.stringify(body), { status: 200 });
  const { accessToken, refreshToken } = token;

  response.headers.set("access-token", accessToken);
  response.headers.set("refresh-token", refreshToken);
  response.cookies.set("UAT", accessToken);
  response.cookies.set("URT", refreshToken);

  return response;
};
