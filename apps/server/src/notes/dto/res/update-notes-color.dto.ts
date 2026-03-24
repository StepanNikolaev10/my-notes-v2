import type { IUpdateNotesColorResDto } from "../types/notes-res-dtos.interfaces";
import { Expose, Type } from "class-transformer";

export class UpdatedNoteDataDto {
  @Expose()
  readonly noteId: number;

  @Expose()
  readonly updatedAt: string;
}

export class UpdateNotesColorResDto implements IUpdateNotesColorResDto {
  @Expose()
  @Type(() => UpdatedNoteDataDto) 
  readonly updatedNotesData: UpdatedNoteDataDto[];
}