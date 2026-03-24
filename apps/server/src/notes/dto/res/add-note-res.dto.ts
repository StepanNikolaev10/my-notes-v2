import { Expose, Transform } from "class-transformer";
import { IAddNoteResDto } from "../types/notes-res-dtos.interfaces";

export class AddNoteResDto implements IAddNoteResDto {
  @Expose()
  @Transform(({ value }) => value instanceof Date ? value.toISOString() : value)
  readonly createdAt: string; 

  @Expose()
  @Transform(({ value }) => value instanceof Date ? value.toISOString() : value)
  readonly updatedAt: string;
}