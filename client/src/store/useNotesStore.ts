import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import type { Note } from '../types/entities';
import { noteKeys, type NoteColorsType } from '../constants/noteColors';

interface NotesStore {
  notes: Note[];
  addNote: (title: string, mainText: string) => void;
  deleteNotes: (ids: string[]) => void;
  changeNotesColor: (ids: string[], color: NoteColorsType) => void;
  updateNoteContent: (id: string, newContent: Note['content']) => void;
  changeNotePosition: (id: string, movementDirection: 'UP' | 'DOWN') => void;
}

const useNotesStore = create<NotesStore>()(
  persist(
    (set, get) => ({
      // СОСТОЯНИЯ
      notes: [],
      // ДЕЙСТВИЯ
      addNote: (title:string, mainText:string) => {
        const newNote = {
          id: uuidv4(),
          dateCreated: Date.now(),
          dateModified: Date.now(), 
          content: {
            title: title,
            mainText: mainText
          },
          styles: {
            color: noteKeys[0]
          }

        }
        set(state => ({
          notes: [newNote, ...state.notes]
        }));
      },

      deleteNotes: (ids) => set(state => ({
        notes: state.notes.filter((note) => !ids.includes(note.id))
      })),

      changeNotesColor: (ids, color: NoteColorsType) => set(state => ({
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
      })),

      changeNotePosition: (id, movementDirection) => {
        const currentNotes = get().notes;

        const currentIndex = currentNotes.findIndex(note => note.id === id);
        if (currentIndex === -1) return;

        let newIndex = currentIndex;
        if (movementDirection === 'UP') {
            newIndex = newIndex - 1;
        } else if (movementDirection === 'DOWN') {
            newIndex = newIndex + 1;
        }

        if (newIndex < 0 || newIndex >= currentNotes.length) {
            return; 
        }

        const newNotes = [...currentNotes];

        const noteToMove = newNotes[currentIndex];
        
        newNotes.splice(currentIndex, 1);
        newNotes.splice(newIndex, 0, noteToMove);
        
        set({
            notes: newNotes
        });
      }

    }),
    {
      name: 'notes',
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export default useNotesStore;