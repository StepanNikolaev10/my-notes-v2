import type { User } from "@my-notes/types";
import type { Session } from "../session.interface";

export interface SessionsServiceArgs {
  createSession: {
    readonly userId: User['id'];
    readonly sessionId: Session['id'];
  }

  updateSession: {
    readonly userId: User['id'];
    readonly currentSessionId: Session['id'];
    readonly newSessionId: Session['id'];
  }
  
}