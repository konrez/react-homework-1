import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

const useTheme = () => {
  return useContext(ThemeContext);
};

const themes = {
  light: {
    backgroundColor: "#ffffff",
    textColor: "#000000",
  },
  dark: {
    backgroundColor: "#222222",
    textColor: "#ffffff",
  },
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          backgroundColor: themes[theme].backgroundColor,
          color: themes[theme].textColor,
          minHeight: "100vh",
          transition: "background-color 0.3s, color 0.3s",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const ThemeButton = () => {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export { ThemeProvider, ThemeButton, useTheme };
