import jwt from "jsonwebtoken";

class JWT {
  async accessToken(payload: any) {
    return await jwt.sign(payload, process.env.JWT_SECRET || "", {
      expiresIn: "1s",
    });
  }

  async refreshToken(payload: string) {
    return await jwt.sign(
      { id: payload, refresh: process.env.REFRESH_PAYLOAD || "" + new Date() },
      process.env.JWT_SECRET || "",
      {
        expiresIn: "10s",
      }
    );
  }

  async expiredCheck(token: string) {
    try {
      return await jwt.verify(token, process.env.JWT_SECRET || "");
    } catch (err) {
      throw err;
    }
  }
}

export default JWT;
