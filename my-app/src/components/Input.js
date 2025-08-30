import { useState } from 'react';

export default function Input({ onAddTodos, onDelete }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === '') {
      alert('할 일을 입력해 주세요.');
      return;
    }

    onAddTodos({ text, id: Date.now() });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        type="text"
        placeholder="할 일"
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}
