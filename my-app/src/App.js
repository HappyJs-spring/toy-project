import { useState } from 'react';
import './App.css';
export default function App() {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <h1 className="title">To do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          type="text"
          placeholder="할 일"
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
}
