import { IsOptional, IsString, MaxLength } from 'class-validator';
import type { Note } from '@my-notes/types';

export class AddNoteDto {
  @IsOptional()
  @IsString({ message: 'Title must be a string' })
  @MaxLength(200, { message: 'Title cannot be longer than 200 characters' })
  readonly title: Note['title'];

  @IsOptional()
  @IsString({ message: 'Main text must be a string' })
  @MaxLength(10000, { message: 'Main text cannot be longer than 10000 characters' })
  readonly mainText: Note['mainText'];
}
