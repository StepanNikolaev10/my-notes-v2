import { User } from "@my-notes/types";

interface General {
  userId: User['id']
}

export interface AccessTokenPayload extends General {}

export interface RefreshTokenPayload extends General {
  sessionId: string;
}
