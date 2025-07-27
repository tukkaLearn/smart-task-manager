import TaskList from "../components/TaskList";
import ThemeToggle from "../components/ThemeToggle";

export default function Dashboard() {
  return (
    <div className="container">
      <ThemeToggle />
      <h2>Dashboard</h2>
      <TaskList />
    </div>
  );
}
