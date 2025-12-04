import { useParams } from 'react-router-dom';
import styles from './NotePage.module.scss';
import NotePageHeader from '../../components/NotePage/NotePageHeader/NotePageHeader';
import NotePageMain from '../../components/NotePage/NotePageMain/NotePageMain';
import { useEffect, useState } from 'react';
import useNotesStore from '../../store/useNotesStore';

const NotePage = () => {
  const { id } = useParams();

  const notes = useNotesStore(state => state.notes);
  const updateNoteContent = useNotesStore(state => state.updateNoteContent)

  const [title, setTitle] = useState('');
  const [mainText, setMainText] = useState('');
  
  useEffect(() => {
    const foundNote = notes.find((item) => item.id === id);
    if (!foundNote) return
    setTitle(foundNote.content.title || '');
    setMainText(foundNote.content.mainText || '');
  }, []);


  // const saveNote = () => {
  //   const updatedNotes = notes.map((note) => {
  //     if (note.id.toString() === id) {
  //       return {
  //         ...note,
  //         content: {
  //           ...note.content, 
  //           title: titleValue,
  //           mainText: textValue
  //         }
  //       };
  //     }
  //     return note;
  //   });

  //   setNotes(updatedNotes);
  //   localStorage.setItem('notesData', JSON.stringify(updatedNotes));
  // }


  return (
    <div className={styles.notePage}>
      <NotePageHeader
        onSaveNote={() => updateNoteContent(id, {title, mainText})}
      />
      <NotePageMain
        title={title}
        mainText={mainText}
        onSetTitle={setTitle}
        onSetMainText={setMainText}
      />

    </div>
  )
}
export default NotePage;