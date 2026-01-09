export const NOTE_COLORS = {
  FIRST: 'transparent',
  SECOND:'rgba(169, 29, 36, 1)',
  THIRD: 'rgba(208, 112, 43, 1)',
  FOURTH: 'rgba(182, 122, 12, 1)',
  FIFTH: 'rgba(6, 127, 46, 1)',
  SIXTH: 'rgba(40, 139, 99, 1)',
  SEVENTH: 'rgba(94, 136, 170, 1)',
  EIGHTH: 'rgba(34, 74, 107, 1)',
  NINETH: 'rgba(107, 44, 93, 1)',
  TENTH: 'rgba(172, 97, 122, 1)',
  ELEVENTH: 'rgba(126, 97, 55, 1)',
  TWELFTH: 'rgba(49, 48, 48, 1)'
} as const; 

export type NoteColorsType = keyof typeof NOTE_COLORS;

export const noteKeys = Object.keys(NOTE_COLORS) as NoteColorsType[]