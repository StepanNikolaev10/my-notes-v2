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
          dateCreated: Date.now(),
          dateModified: Date.now(), 
          positionIndex: get().notes.length+1,
          content: {
            title: title,
            mainText: mainText
          },
          styles: {
            color: null
          }

        }
        set(state => ({
          notes: [newNote, ...state.notes]
        }));
      },

      deleteNotes: (ids) => set(state => ({
        notes: state.notes.filter((note) => !ids.includes(note.id))
      })),

      changeNotesColor: (ids, color) => set(state => ({
        notes: state.notes.map(note => 
          ids.includes(note.id)
          ? { ...note, dateModified: Date.now(), styles: { ...note.styles, color } } 
          : note
        )
      })),
      
      updateNoteContent: (id, newContent) => set(state => ({
        notes: state.notes.map(note =>
          note.id === id 
          ? { ...note, dateModified: Date.now(), content: newContent }
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