import { IsInt, Min } from "class-validator";
import type { IUpdateNotePositionDto } from "../types/notes-req-dtos.interfaces";

export class UpdateNotePosisionDto implements IUpdateNotePositionDto {
  @IsInt()
  @Min(1)
  readonly noteId: number;
  @IsInt()
  @Min(1)
  readonly updatedPositionNumber: number;
}