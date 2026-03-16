import { Note, NoteColors } from "@my-notes/types";
import { Expose, Transform } from "class-transformer";

export class AddNoteResDto implements Note{
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  mainText: string;

  @Expose()
  colorKey: keyof NoteColors;

  @Expose()
  @Transform(({ value }) => value instanceof Date ? value.toISOString() : value)
  createdAt: string; 

  @Expose()
  @Transform(({ value }) => value instanceof Date ? value.toISOString() : value)
  updatedAt: string;
}