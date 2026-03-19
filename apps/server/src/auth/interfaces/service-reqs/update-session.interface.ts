import type { SessionPayload } from "../session.interface";
import type { SessionId } from '../../types/session-id.type';

export interface UpdateSessionPayload {
  readonly userId: SessionPayload['userId'];
  readonly currentSessionId: SessionId;
  readonly newSessionId: SessionId;
}