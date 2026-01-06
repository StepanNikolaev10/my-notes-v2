export interface Note {
  id: string,
  dateCreated: number,
  dateModified: number, 
  content: {
    title: string,
    mainText: string
  },
  styles: {
    color: null | string
  }
}