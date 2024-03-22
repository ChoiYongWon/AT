import { auth } from "@/auth";
import { UnauthorizedError } from "../api/error/auth/UnauthorizedError";
import { Session, User } from "next-auth";

export const useAuth = async () => {
  const session = await auth();
  if (!session) throw UnauthorizedError();
  return session as Session;
};
