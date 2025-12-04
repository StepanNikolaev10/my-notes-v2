import styles from './NotePageMain.module.scss';
import ReactQuill from 'react-quill-new'; 
import 'react-quill-new/dist/quill.snow.css'; 

const NotePageMain = ({ title, mainText, onSetTitle, onSetMainText }) => {

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['clean']
    ],
    clipboard: {
      matchVisual: false,
    }
  };

  const formats = [
    'header', 
    'bold', 
    'italic', 
    'underline', 
    'strike', 
    'blockquote',
    'list', 
    'indent', 
  ];


  return (
    <div className={styles.notePageMain}>
      <input 
        type="text" 
        placeholder='Title...'
        value={title}
        onChange={(e) => onSetTitle(e.target.value)}
      />
      <ReactQuill 
        className={styles.quill}
        theme="snow" 
        value={mainText} 
        onChange={onSetMainText}
        modules={modules}
        formats={formats}
        placeholder="Note text..."
      />
    </div>
  )
}
export default NotePageMain;