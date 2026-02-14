import type { NoteColorsKeysType } from "../constants/note-colors"

export interface INote {
  id: number;
  title: string,
  mainText: string
  colorKey: NoteColorsKeysType;
  createdAt: Date | string; // на клиент эти данные приходят строкой из за JSON.stringify
  lastEdited: Date | string; // на клиент эти данные приходят строкой из за JSON.stringify
}