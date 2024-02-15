import {useState} from 'react';
import TodoCreate from './todoCreate';

function TodoList() {

    const [listName, setListName] = useState('');
  const [list, setList] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (listName.trim() !== '') {
      setList([...list, listName]);
      setListName('');
    }
  };
  const handleDelete = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div className={'todoListBox'}>
        <ul className={'todoList'}>
            {list.map((item, index) => (
            <li key={index} className={'todoItem'}>
                <label>
                <input type="checkbox"/>
                <span className={'checkIcon'}></span>
                <span className={'labelText'}>{item}</span>
                </label>
                <button type={'button'} className={'btnDel'} onClick={() => handleDelete(index)}>삭제</button>
            </li>
            ))}
        </ul>
        <TodoCreate listName={listName} setListName={setListName} handleSubmit={handleSubmit} />
    </div>
    
  )
}

export default TodoList;