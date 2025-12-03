import { create } from 'zustand';
import useNotesStore from './useNotesStore';

const useEditableNotesStore = create(
  (set, get) => ({
    // СОСТОЯНИЯ
    editableNotes: [],
    // ДЕЙСТВИЯ
    addEditableNote: (id) => {
      const notes = useNotesStore.getState().notes;
      const currentEditableNotes = get().editableNotes;

      const noteToEdit = notes.find(note => note.id === id);
      if (!noteToEdit) return;

      const isAlreadyAdded = currentEditableNotes.some(note => note.id === id);
      if (isAlreadyAdded) {
        return set((state) => ({
          editableNotes: state.editableNotes.filter(note => note.id !== id)
        }));
      }

      set((state) => ({
        editableNotes: [...state.editableNotes, noteToEdit]
      }));
    },
    stopEditing: () => {
      set({
        editableNotes: []
      });
    }
  })
);

export default useEditableNotesStore;