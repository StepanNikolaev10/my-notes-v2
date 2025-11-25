import styles from './NotesPage.module.scss';
import { useState, useEffect } from 'react';
import NotesPageMain from '/src/components/NotesPage/Containers/NotesPageMain/NotesPageMain';
import { v4 as uuidv4 } from 'uuid';
import ModalContainer from '../../components/NotesPage/Containers/ModalContainer/ModalContainer';
import AuthorizedHeader from '../../components/Shared/Containers/AuthorizedHeader/AuthorizedHeader';
import NoteAddBtn from '../../components/NotesPage/UI/NoteAddBtn/NoteAddBtn';

const NotesPage = () => {
  const [notes, setNotes] = useState(() => {
    // ленивая подрузка, что бы данные получались единожды при первом рендере компонента
    // ЕСЛИ ПЕРЕДАВАТЬ В USESTATE ФУНКЦИЮ - ОНА БУДЕТ ВЫПОЛНЕНА 1 РАЗ ПРИ ПЕРВОМ РЕНДЕРЕ, ЧТО БЫ ПОЛУЧИТЬ ЗНАЧЕНИЕ СОСТОЯНИЯ
    const saved = localStorage.getItem('notesData');
    return saved ? JSON.parse(saved) : [];
  });
  const [activeModal, setActiveModal] = useState(null);
  const [editableNotes, setEditableNotes] = useState([]);
  
  // хук обновляет localStorage если состояние notes изменилось.
  useEffect(() => {
    localStorage.setItem('notesData', JSON.stringify(notes)); 
  }, [notes]);

  const addNote = (title, mainText) => {
    const newNote = {
      id: uuidv4(),
      index: notes.length+1,
      content: {
        title: title,
        mainText: mainText
      },
      styles: {
        isBold: false,
        isCursive: false,
        color: null
      }
    }
    setNotes(prev => [...prev, newNote]); 
    setActiveModal(null);
  };

  const updateNoteText = (id, newContent) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, content: newContent } : t))
    );
  };

  const openModal = (type) => {
    setActiveModal(type); 
  }

  const editNotes = (id) => {
    const noteToEdit = notes.find(note => note.id === id);

    if (noteToEdit) {
      setEditableNotes(prev => {
        const isAlreadyAdded = prev.some(note => note.id === id);
        if (isAlreadyAdded) {
          return prev.filter(note => note.id !== id);
        }
        return [...prev, noteToEdit];
      });
    }
  }

  const deleteNotes = () => {
    const idsToDelete = editableNotes.map(note => note.id);
    setNotes(prev => {
      const remainingNotes = prev.filter(note => !idsToDelete.includes(note.id));
      return remainingNotes.map((note, index) => ({
        ...note,
        index: index + 1, 
      }));
    });
    setEditableNotes([]);
  }

  const clearNotes = () => {
    setNotes([]);
    setEditableNotes([]);
  }

  const toggleTextBold = () => {
    const idsToToggle = editableNotes.map(note => note.id);
    setNotes(prev => {
      return prev.map(note => {
        if(idsToToggle.includes(note.id)) {
          return { 
            ...note, 
            styles: { ...note.styles, isBold: !note.styles.isBold } 
          };
        }
        return note;
      });
    });
  }

  const toggleTextCursive = () => {
    const idsToToggle = editableNotes.map(note => note.id);
    setNotes(prev => {
      return prev.map(note => {
        if(idsToToggle.includes(note.id)) {
          return { 
            ...note, 
            styles: { ...note.styles, isCursive: !note.styles.isCursive } 
          };
        }
        return note;
      });
    });
  }

  const updateNotesColor = (color) => {
    const idsToUpdate = editableNotes.map(note => note.id);
    setNotes(prev => {
      return prev.map(note => {
        if(idsToUpdate.includes(note.id)) {
          return { 
            ...note, 
            styles: { ...note.styles, color: color } 
          };
        }
        return note;
      });
    });
  }

  return (
    <div className={styles.notesPage}>
      <AuthorizedHeader
        editableNotes={editableNotes}
        onDeleteNotes={deleteNotes}
        onStopEditing={() => setEditableNotes([])}
        onToggleTextBold={toggleTextBold}
        onToggleTextCursive={toggleTextCursive}
        onOpenModal={openModal}
      />
      <NotesPageMain
        notes={notes}
        onTextChange={updateNoteText}
        onEditNotes={editNotes}
        editableNotes={editableNotes}
        onOpenModal={openModal}
      />
      <ModalContainer
        isOpen={activeModal}
        onClose={() => setActiveModal(null)}
        onAddNote={addNote}
        onUpdateNotesColor={updateNotesColor}
      />
    </div>
  );
  
}

export default NotesPage;