import { useParams } from 'react-router-dom';
import styles from './NotePage.module.scss';
import NotePageHeader from '../../components/NotePage/NotePageHeader/NotePageHeader';
import NotePageMain from '../../components/NotePage/NotePageMain/NotePageMain';
import { useEffect, useState } from 'react';

const NotePage = () => {
  const { id } = useParams();
  
  const [notes, setNotes] = useState([]);
  const [titleValue, setTitleValue] = useState('');
  const [textValue, setTextValue] = useState('');
  
  useEffect(() => {
    const fetchData = () => {
      try {
        const storedNotes = JSON.parse(localStorage.getItem('notesData'));
        if (storedNotes) setNotes(storedNotes);
        
        const foundNote = storedNotes.find((item) => item.id === id);
        if (foundNote) {
          setTitleValue(foundNote.content.title || '');
          setTextValue(foundNote.content.mainText || '');
        } else {
          console.error('Задча не найдена');
        }
      } catch (error) {
        console.error('Ошибка при чтении данных', error);
      }
    };

    fetchData();

  }, []);


  const saveNote = () => {
    const updatedNotes = notes.map((note) => {
      if (note.id.toString() === id) {
        return {
          ...note,
          content: {
            ...note.content,
            title: titleValue,
            mainText: textValue
          }
        };
      }
      return note;
    });

    setNotes(updatedNotes);
    localStorage.setItem('notesData', JSON.stringify(updatedNotes));
  }


  return (
    <div className={styles.notePage}>
      <NotePageHeader
        onSaveNote={saveNote}
      />
      <NotePageMain
        titleValue={titleValue}
        textValue={textValue}
        onSetTextValue={setTextValue}
        onSetTitleValue={setTitleValue}
      />

    </div>
  )
}
export default NotePage;