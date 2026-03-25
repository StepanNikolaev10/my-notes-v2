import type { NoteColorsKeys } from "./note-colors.interface";

export interface Note {
  readonly id: number;
  readonly title: string,
  readonly mainText: string
  readonly colorKey: NoteColorsKeys;
  readonly positionNumber: number;
  readonly isArchived: boolean;
  readonly isTrashed: boolean;
  readonly createdAt: Date | string; // на клиент эти данные приходят строкой из за JSON.stringify
  readonly updatedAt: Date | string; // на клиент эти данные приходят строкой из за JSON.stringify
}