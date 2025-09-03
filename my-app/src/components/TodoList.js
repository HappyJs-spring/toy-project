export default function TodoList({
  todos,
  onClick,
  onHandleEdit,
  editId,
  editText,
  onEditSave,
  setEditText,
}) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      onEditSave();
                    }
                  }}
                />
                <button onClick={onEditSave}>저장</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => onHandleEdit(todo.id)}>수정</button>
                <button className="btn-delete" onClick={() => onClick(todo.id)}>
                  삭제
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
