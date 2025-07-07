import React from "react";
interface ThemeToggleProps {
    darkMode: boolean;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, setTheme}) => {
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