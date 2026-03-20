import type { Note, User } from "@my-notes/types";

export interface NotesServiceArgs {
  addNote: {
    readonly title: Note['title'];
    readonly mainText: Note['mainText'];
    readonly authorId: User['id'];
  }
}