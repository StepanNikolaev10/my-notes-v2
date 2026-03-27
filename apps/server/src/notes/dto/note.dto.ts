import type { Note, NoteColorsKeys  } from "@my-notes/types";

export class NoteDto implements Note {
  readonly id: number;
  readonly title: string;
  readonly mainText: string;
  readonly colorKey: NoteColorsKeys;
  readonly status: 'default' | 'archived' | 'trashed';
  readonly positionNumber: number;
  readonly createdAt: string;
  readonly updatedAt: string;
}