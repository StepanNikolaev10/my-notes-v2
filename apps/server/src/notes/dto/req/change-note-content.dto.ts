import { IsInt, IsString, MaxLength, Min } from "class-validator";
import type { IChangeNoteContentDto } from "../types/notes-req-dtos.interfaces";

export class ChangeNoteContentDto implements IChangeNoteContentDto {
  @IsInt()
  @Min(1)
  readonly noteId: number;
  
  @IsString()
  @MaxLength(200, { message: 'Title cannot be longer than 200 characters' })
  readonly changedTitle: string;

  @IsString()
  @MaxLength(10000, { message: 'Main text cannot be longer than 10000 characters' })
  readonly changedMainText: string;
}