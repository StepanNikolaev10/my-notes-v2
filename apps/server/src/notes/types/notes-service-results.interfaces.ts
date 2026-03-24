import type { Note } from "@my-notes/types";

export interface IAddNoteResult {
  readonly createdAt: Note['createdAt'];
  readonly updatedAt: Note['updatedAt'];
}

export interface IUpdateNotesColorResult {
  readonly updatedNotesData: {
    readonly noteId: Note['id'];
    readonly updatedAt: Note['updatedAt'];
  }[]
}

export interface IUpdateNoteContentResult {
  readonly updatedAt: Note['updatedAt'];
}

export interface IGetNotesResult{
  readonly notes: Note[];
}
