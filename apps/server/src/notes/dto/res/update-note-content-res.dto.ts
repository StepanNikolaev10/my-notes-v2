import { Expose, Transform } from "class-transformer";

export class UpdateNoteContentResDto implements UpdateNoteContentResDto {
  @Expose()
  @Transform(({ value }) => value instanceof Date ? value.toISOString() : value)
  readonly updatedAt: string;
}