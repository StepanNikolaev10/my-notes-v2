import { useState } from 'react'; 
import Input from '/src/components/UI/Input/Input';

const TaskListForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputValue.trim(); 
    if (!text) return; 
    addTask(text);
    setInputValue(''); 
  };

  return (
    <form onSubmit={handleSubmit}> 
      <Input
        type="text" 
        placeholder="Введите задачу" 
        value={inputValue}    
        onChange={handleInputChange}
      />
      <button type="submit">Отправить</button>
    </form>
  );
}

export default TaskListForm;