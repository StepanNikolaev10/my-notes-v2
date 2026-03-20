import type { User } from "@my-notes/types"
import type { Session } from "../session.interface";
import type { Tokens } from "../tokens.interface";

export interface TokensServiceArgs {
  generateAccessToken: {
    readonly userId: User['id'];
  }

  generateRefreshToken: {
    readonly userId: User['id'];
    readonly newSessionId: Session['id'];
  }

  verifyAccessToken: Tokens['accessToken'];
  
  verifyRefreshToken: Tokens['refreshToken'];
}