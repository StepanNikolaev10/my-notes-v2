import type { NoteColorsType } from "../constants/noteColors"

export interface Note {
  id: string,
  dateCreated: number,
  dateModified: number, 
  content: {
    title: string,
    mainText: string
  },
  styles: {
    color: NoteColorsType
  }
}