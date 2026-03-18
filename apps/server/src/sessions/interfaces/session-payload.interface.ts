import { User } from "@my-notes/types";

export interface SessionPayload {
  userId: User['id'];
  createdAt: number;
  isUpdated: boolean;
}