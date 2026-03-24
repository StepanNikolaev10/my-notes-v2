import { ArrayNotEmpty, IsArray, IsInt } from "class-validator";
import type { IDeleteNotesDto } from "../types/notes-req-dtos.interfaces";

export class DeleteNotesDto implements IDeleteNotesDto {
  @IsArray()
  @ArrayNotEmpty() // Убедится, что массив не пустой (в нем есть хотя бы 1 элемент)
  @IsInt({ each: true }) // IsInt строже, чем IsNumber. Он не пропустит дробные числа
  readonly noteIds: number[];
}