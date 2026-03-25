import type { User } from "@my-notes/types";
import type { Session } from "../session.interface";

export interface CreateSessionArgs {
  readonly userId: User['id'];
  readonly sessionId: Session['id'];
}

export interface UpdateSessionArgs {
  readonly userId: User['id'];
  readonly currentSessionId: Session['id'];
  readonly newSessionId: Session['id'];
}