import type { Session } from './session.interface'
import { SessionId } from '../types/session-id.type';

export interface CreateSession {
  readonly userId: Session['userId'];
  readonly sessionId: SessionId;
  readonly ttl: number;
}