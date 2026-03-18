import type { Session } from './session-payload.interface'
import { SessionId } from '../types/session-id.type';

export interface CreateSessionPayload {
  readonly userId: Session['userId'];
  readonly sessionId: SessionId;
}