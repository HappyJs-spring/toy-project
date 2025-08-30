import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="App">
      <h1>To do List</h1>
      <input
        type="text"
        placeholder="할 일"
        onChange={handleInputChange}
      ></input>
    </div>
  );
}
