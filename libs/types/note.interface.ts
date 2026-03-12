import type { NoteColors } from "./note-colors.interface";
export interface Note {
  id: number;
  title: string,
  mainText: string
  colorKey: keyof NoteColors;
  createdAt: Date | string; // на клиент эти данные приходят строкой из за JSON.stringify
  updatedAt: Date | string; // на клиент эти данные приходят строкой из за JSON.stringify
}