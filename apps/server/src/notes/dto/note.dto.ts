import type { Note } from "../types/note.interface";
import type { NoteColorsKeys } from "../types/note-colors.interface";

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