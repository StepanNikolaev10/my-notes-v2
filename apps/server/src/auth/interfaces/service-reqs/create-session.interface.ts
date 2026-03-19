import type { SessionPayload } from '../session.interface'
import { SessionId } from '../../types/session-id.type';

export interface CreateSessionPayload {
  readonly userId: SessionPayload['userId'];
  readonly sessionId: SessionId;
}