import type { NoteColorsKeys } from "./note-colors.interface";

export interface Note {
  id: number;
  title: string,
  mainText: string
  colorKey: NoteColorsKeys;
  createdAt: Date | string; // на клиент эти данные приходят строкой из за JSON.stringify
  updatedAt: Date | string; // на клиент эти данные приходят строкой из за JSON.stringify
}