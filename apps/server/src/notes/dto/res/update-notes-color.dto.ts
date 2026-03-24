import type { IUpdateNotesColorResDto } from "../types/notes-res-dtos.interfaces";
import { Expose } from "class-transformer";

export class UpdateNotesColorResDto implements IUpdateNotesColorResDto {
  @Expose()
  readonly updatedNotesData: { 
    readonly noteId: number; 
    readonly updatedAt: string; 
  }[];
}