import { Expose } from "class-transformer";
import { NoteDto } from "../note.dto";
import { IGetNotesResDto } from "../types/notes-res-dtos.interfaces";

export class GetNotesResDto implements IGetNotesResDto {
  @Expose()
  readonly notes: NoteDto[]
}