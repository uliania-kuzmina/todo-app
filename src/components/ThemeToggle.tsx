import React from "react";
import { ButtonField } from "../filds/ButtonField";
interface ThemeToggleProps {
    darkMode: boolean;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, setTheme}) => {
    const toggleTheme = () => {
        setTheme(darkMode ? "light" : "dark");
    };

    return (
        <ButtonField text={darkMode ? "Светлая тема" : "Темная тема"} name="theme-toggle" onClick={toggleTheme}/>
    )
}

export default ThemeToggle;