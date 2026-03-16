import type { Note } from "@my-notes/types";
import { User } from "@my-notes/types";

export class RemoveNoteDto {
  readonly id: Note['id'];
  readonly authorId: User['id']
}