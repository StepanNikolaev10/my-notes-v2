import type { NoteColorsKeys } from "src/notes/types/note-colors.interface";
import { ArrayNotEmpty, IsArray, IsIn, IsInt, IsString } from "class-validator";
import type { IUpdateNotesColorDto } from "../types/notes-req-dtos.interfaces";
import { NoteColorsConstant } from "src/notes/constants/note-colors.constant";

export class UpdateNotesColorDto implements IUpdateNotesColorDto {
  @IsArray()
  @ArrayNotEmpty() // Убедится, что массив не пустой (в нем есть хотя бы 1 элемент)
  @IsInt({ each: true }) // IsInt строже, чем IsNumber. Он не пропустит дробные числа
  noteIds: number[];
  
  @IsString()
  @IsIn(Object.keys(NoteColorsConstant))
  updatedColorKey: NoteColorsKeys
}