import { User } from "src/common/interfaces/user.interface";

interface General {
  userId: User['id']
}

export interface AccessTokenPayload extends General {}

export interface RefreshTokenPayload extends General {
  sessionId: string;
}
