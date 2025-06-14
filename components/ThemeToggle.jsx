import React from "react";

const ThemeToggle = ({ darkMode, setTheme}) => {
    const toggleTheme = () => {
        setTheme(darkMode ? "light" : "dark");
    };

    return (
        <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? "Светлая тема" : "Темная тема"}
        </button>
    )
}

export default ThemeToggle;