import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import type { Note } from '../types/entities';
import { noteKeys, type NoteColorsType } from '../constants/noteColors';
import useSelectedNotesStore from './useSelectedNotesStore';

interface NotesStore {
  notes: Note[];
  trashedNotes: Note[];
  addNote: (title: string, mainText: string) => void;
  deleteNotes: (ids: string[]) => void;
  changeNotesColor: (ids: string[], color: NoteColorsType) => void;
  updateNoteContent: (id: string, newContent: Note['content']) => void;
  changeNotePosition: (id: string, movementDirection: 'UP' | 'DOWN') => void;
  deleteTrashedNotes: (ids: string[]) => void;
  deleteAllTrashedNotes: () => void;
  restoreTrashedNotes: (ids: string[]) => void;
}

const useNotesStore = create<NotesStore>()(
  persist(
    (set, get) => ({
      // СОСТОЯНИЯ
      notes: [],
      trashedNotes: [],
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
          noteStyles: {
            color: noteKeys[0]
          }

        }
        set(state => ({
          notes: [newNote, ...state.notes]
        }));
      },

      deleteNotes: (ids) => set(state => ({
        trashedNotes: [
          ...state.notes.filter((note) => ids.includes(note.id)),
          ...state.trashedNotes
        ],
        notes: state.notes.filter(note => !ids.includes(note.id))
      })),

      changeNotesColor: (ids, color: NoteColorsType) => set(state => ({
        notes: state.notes.map(note => 
          ids.includes(note.id)
          ? { ...note, dateModified: Date.now(), noteStyles: { ...note.noteStyles, color } } 
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
      },

      deleteTrashedNotes: (ids) => {
        set(state => ({
        trashedNotes: state.trashedNotes.filter(note => !ids.includes(note.id))
        }))
        useSelectedNotesStore.getState().deselectByIds(ids)
      },

      deleteAllTrashedNotes: () => {
        set({
          trashedNotes: []
        })
        useSelectedNotesStore.getState().deselectAll();
      },

      restoreTrashedNotes: (ids) => {
        set(state => ({
          notes: [...state.trashedNotes.filter(note => ids.includes(note.id)), ...state.notes],
          trashedNotes: state.trashedNotes.filter(note => !ids.includes(note.id))
        }))
        useSelectedNotesStore.getState().deselectByIds(ids)
      }

    }),
    {
      name: 'notes',
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export default useNotesStore;