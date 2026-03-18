import { User } from "@my-notes/types";
import type { JwtPayload } from "jsonwebtoken";

interface General extends JwtPayload {
  userId: User['id']
}

export interface AccessTokenPayload extends General {}

export interface RefreshTokenPayload extends General {
  sessionId: string;
}
