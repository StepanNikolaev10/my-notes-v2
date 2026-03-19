import { IsNotEmpty, IsNumber } from 'class-validator';
import type { Note } from '@my-notes/types';

export class RemoveNoteDto {
  @IsNotEmpty({ message: 'Note ID cannot be empty' })
  @IsNumber({}, { message: 'Note ID must be a number' })
  readonly id: Note['id'];
}
