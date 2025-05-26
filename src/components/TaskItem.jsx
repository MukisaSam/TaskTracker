
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.text}
      <button onClick={() => onToggle(task.id)}>✓</button>
      <button onClick={() => onDelete(task.id)}>✕</button>
    </li>
  );
}

export default TaskItem;
