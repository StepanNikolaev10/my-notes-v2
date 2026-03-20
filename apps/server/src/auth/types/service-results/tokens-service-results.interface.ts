import type { Tokens } from "../tokens.interface"

export interface TokensServiceResults {
  generateAccessToken: Tokens['accessToken'];
  generateRefreshToken: Tokens['refreshToken'];
  verifyAccessToken: Tokens['accessTokenPayload'];
  verifyRefreshToken: Tokens['refreshTokenPayload'];
}