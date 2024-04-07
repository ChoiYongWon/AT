import { auth } from "@/auth";
import { Session, User } from "next-auth";
import { UnauthorizedError } from "../../api/error/auth/Unauthorized.error";

export const useAuth = async () => {
  const session = await auth();
  if (!session) throw UnauthorizedError();
  return session as Session;
};
