import type { SessionPayload } from './session-payload.interface'
import { SessionId } from '../types/session-id.type';

export interface CreateSessionPayload {
  readonly userId: SessionPayload['userId'];
  readonly sessionId: SessionId;
}