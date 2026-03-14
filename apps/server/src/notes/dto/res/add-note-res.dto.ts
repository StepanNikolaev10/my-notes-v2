import { Note, NoteColors } from "@my-notes/types";

export class AddNoteResDto implements Note{

  id: number;
  
  title: string;

  mainText: string;

  colorKey: keyof NoteColors;

  createdAt: string; // не решённый вопрос
  
  updatedAt: string; // не решенный вопрос
}