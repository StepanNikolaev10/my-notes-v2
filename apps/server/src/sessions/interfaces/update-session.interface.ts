import type { Session } from './session.interface'
import type { SessionId } from '../types/session-id.type';

export interface UpdateSession {
  readonly userId: Session['userId'];
  readonly currentSessionId: SessionId;
  readonly newSessionId: SessionId;
}