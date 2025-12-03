import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

const useNotesStore = create(
  persist(
    (set, get) => ({
      // СОСТОЯНИЯ
      notes: [],
      // ДЕЙСТВИЯ
      addNote: (title, mainText) => {
        const newNote = {
          id: uuidv4(),
          content: {
            title: title,
            mainText: mainText
          },
          styles: {
            color: null
          }
        }
        set(state => ({
          notes: [...state.notes, newNote]
        }));
      },

      deleteNotes: (ids) => set(state => ({
        notes: state.notes.filter((note) => !ids.includes(note.id))
      })),

      changeNotesColor: (ids, color) => set(state => ({
        notes: state.notes.map(note => 
          ids.includes(note.id)
          ? { ...note, styles: { ...note.styles, color } } 
          : note
        )
      })),
      
      updateNoteContent: (id, newContent) => set(state => ({
        notes: state.notes.map(note =>
          note.id === id 
          ? { ...note, content: newContent }
          : note
        )
      }))

    }),
    {
      name: 'notes',
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export default useNotesStore;