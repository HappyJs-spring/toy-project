import Input from '../components/Input';
import TodoList from '../components/TodoList';
import { useState } from 'react';

export default function MainPage() {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAddUser = (text) => {
    setTodos((prev) => [...prev, text]);
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleEdit = (editId) => {
    const selectedTodo = todos.find((todo) => todo.id === editId);
    setEditId(editId);
    setEditText(selectedTodo.text);
  };

  const editSave = () => {
    const newTodos = todos.map((todo) =>
      todo.id === editId ? { ...todo, text: editText } : todo
    );

    setTodos(newTodos);
    setEditId(null);
    setEditText('');
  };

  return (
    <div className="App">
      <h1 className="title">to do list</h1>
      <Input onAddTodos={handleAddUser} />
      <TodoList
        todos={todos}
        onClick={handleDelete}
        onHandleEdit={handleEdit}
        editId={editId}
        editText={editText}
        onEditSave={editSave}
        setEditText={setEditText}
      />
    </div>
  );
}
