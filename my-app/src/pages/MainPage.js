import Input from '../components/Input';
import TodoList from '../components/TodoList';
import { useState } from 'react';

export default function MainPage() {
  const [todos, setTodos] = useState([]);

  const handleAddUser = (text) => {
    setTodos((prev) => [...prev, text]);
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <div className="App">
      <h1 className="title">to do list</h1>
      <Input onAddTodos={handleAddUser} />
      <TodoList todos={todos} onClick={handleDelete} />
    </div>
  );
}
