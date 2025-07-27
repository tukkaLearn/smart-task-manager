import { useTheme } from "../context/useTheme";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div style={{ textAlign: "right" }}>
      <button onClick={toggleTheme}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}
