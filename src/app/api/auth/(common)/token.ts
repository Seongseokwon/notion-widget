import JWT from "@/libs/jwt";
import { NextResponse } from "next/server";

export const generateToken = async (payload: any) => {
  const jwt = new JWT();

  return {
    accessToken: await jwt.accessToken(payload),
    refreshToken: await jwt.refreshToken(payload.id),
  };
};
export const returnResponseWithToken = (
  token: Record<string, any>,
  message: string
) => {
  const response = new NextResponse(message, { status: 200 });
  const { accessToken, refreshToken } = token;

  response.headers.set("access-token", accessToken);
  response.headers.set("refresh-token", refreshToken);
  response.cookies.set("UAT", accessToken);
  response.cookies.set("URT", refreshToken);
  return response;
};
