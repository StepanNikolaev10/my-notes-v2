import type { Note } from "@my-notes/types";

export interface AddNoteResult {
  readonly createdAt: Note['createdAt'];
  readonly updatedAt: Note['updatedAt'];
}

export interface UpdateNotesColorResult {
  readonly updatedNotesData: {
    readonly noteId: Note['id'];
    readonly updatedAt: Note['updatedAt'];
  }[]
}

export interface UpdateNoteContentResult {
  readonly updatedAt: Note['updatedAt'];
}

export interface GetNotesResult{
  readonly notes: Note[];
}
