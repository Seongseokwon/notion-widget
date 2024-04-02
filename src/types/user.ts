import { User } from "@prisma/client";

export type UserWithoutPw = Omit<User, "hashedPassword">;
