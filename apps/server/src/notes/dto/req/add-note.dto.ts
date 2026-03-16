import type { Note } from "@my-notes/types";

export class AddNoteDto {
  readonly title: Note['title'];
  readonly mainText: Note['mainText'];
}