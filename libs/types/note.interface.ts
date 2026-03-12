import type { NoteColorsKeysType } from "../../shared/constants/note-colors"

export interface INote {
  id: number;
  title: string,
  mainText: string
  colorKey: NoteColorsKeysType;
  createdAt: Date | string; // на клиент эти данные приходят строкой из за JSON.stringify
  updatedAt: Date | string; // на клиент эти данные приходят строкой из за JSON.stringify
}