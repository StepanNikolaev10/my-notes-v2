import type { Note, NoteColorsKeys  } from "@my-notes/types";

export class NoteDto implements Note {
  readonly id: number;
  readonly title: string;
  readonly mainText: string;
  readonly colorKey: NoteColorsKeys
  readonly isArchived: boolean;
  readonly isTrashed: boolean;
  readonly createdAt: string;
  readonly updatedAt: string;
}