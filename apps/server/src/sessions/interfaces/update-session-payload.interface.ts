import type { SessionPayload } from "./session-payload.interface";
import type { SessionId } from '../types/session-id.type';

export interface UpdateSession {
  readonly userId: SessionPayload['userId'];
  readonly currentSessionId: SessionId;
  readonly newSessionId: SessionId;
}