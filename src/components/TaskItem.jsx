export default function TaskItem({ task, onToggle }) {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.title}</span>
    </div>
  );
}
