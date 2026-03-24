import { ArrayNotEmpty, IsArray, IsInt } from "class-validator";
import type { ITrashNotesDto } from "../types/notes-req-dtos.interfaces";

export class TrashNotesDto implements ITrashNotesDto {
  @IsArray()
  @ArrayNotEmpty() // Убедится, что массив не пустой (в нем есть хотя бы 1 элемент)
  @IsInt({ each: true }) // IsInt строже, чем IsNumber. Он не пропустит дробные числа
  readonly noteIds: number[];
}