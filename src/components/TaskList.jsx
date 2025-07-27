import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks([
      { id: 1, title: "Learn React", completed: false },
      { id: 2, title: "Build a Project", completed: false },
    ]);
  }, []);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <h3>Your Tasks</h3>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={toggleTask} />
      ))}
      <TaskForm onAddTask={addTask} />
    </>
  );
}
