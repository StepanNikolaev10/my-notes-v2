import type { Note } from "@my-notes/types";

export interface IAddNoteResDto {
  readonly createdAt: Note['createdAt'];
  readonly updatedAt: Note['updatedAt'];
}

export interface IUpdateNotesColorResDto {
  readonly updatedNotesData: {
    readonly noteId: Note['id'];
    readonly updatedAt: Note['updatedAt'];
  }[]
}

export interface IUpdateNoteContentResDto {
  readonly updatedAt: Note['updatedAt'];
}

export interface IGetNotesResDto {
  readonly notes: Note[];
}
