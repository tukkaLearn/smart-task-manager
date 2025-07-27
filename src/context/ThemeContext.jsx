import { createContext, useReducer } from "react";

const ThemeContext = createContext();

const initialState = { darkMode: false };

function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = () => dispatch({ type: "TOGGLE" });

  return (
    <ThemeContext.Provider value={{ darkMode: state.darkMode, toggleTheme }}>
      <div className={state.darkMode ? "dark" : "light"}>{children}</div>
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
