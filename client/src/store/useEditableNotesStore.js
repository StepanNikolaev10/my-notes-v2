import { create } from 'zustand';
import useNotesStore from './useNotesStore';

const useEditableNotesStore = create(
  (set, get) => ({
    // СОСТОЯНИЯ
    editableNotesIds: [],
    // ДЕЙСТВИЯ
    addEditableNoteId: (id) => {
      const notes = useNotesStore.getState().notes;
      const currentEditableNotesIds = get().editableNotesIds;

      const noteToEdit = notes.find(item => item.id === id);
      if (!noteToEdit) return;

      const isAlreadyAdded =  currentEditableNotesIds.some(item => item === id);
      if (isAlreadyAdded) {
        return set((state) => ({
          editableNotesIds: state.editableNotesIds.filter(item => item !== id)
        }));
      }

      set((state) => ({
        editableNotesIds: [...state.editableNotesIds, id]
      }));
    },
    stopEditing: () => {
      set({
        editableNotesIds: []
      });
    }
  })
);

export default useEditableNotesStore;