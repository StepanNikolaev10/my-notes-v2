import { Note, NoteColors } from "@my-notes/types";
import { Expose, Transform } from "class-transformer";

export class AddNoteResDto implements Note {
  @Expose()
  readonly id: number;

  @Expose()
  readonly title: string;

  @Expose()
  readonly mainText: string;

  @Expose()
  readonly colorKey: keyof NoteColors;

  @Expose()
  @Transform(({ value }) => value instanceof Date ? value.toISOString() : value)
  readonly createdAt: string; 

  @Expose()
  @Transform(({ value }) => value instanceof Date ? value.toISOString() : value)
  readonly updatedAt: string;
}