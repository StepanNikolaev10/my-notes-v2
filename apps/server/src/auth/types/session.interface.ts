import type { User } from "@my-notes/types";

export interface Session {
  id: string;
  sessionPayload: {
    userId: User['id'];
    createdAt: number;
    isUpdated: boolean;
  }
}