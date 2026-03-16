import { User } from "@my-notes/types";

export interface Session {
  userId: User['id'];
  createdAt: number;
  isUpdated: boolean;
}