import React, { useEffect, useState } from "react";
import "../src/App.css";


import InputSection from "../src/components/InputSection";
import FilterButtons from "../src/components/FilterButtons";
import TaskList from "../src/components/TaskList";
import ThemeToggle from "../src/components/ThemeToggle";
import { Task } from "./types/types";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
   const saved = localStorage.getItem("tasks");
   return saved ? JSON.parse(saved) : []; 
  })

  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");
  
  const darkMode = theme === "dark"

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, {text: input, done: false}]); 
      setInput(""); 
    }
  };

  const toggleTask = (index: number) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done; 
    setTasks(updated);
  };

  const deleteTask = (index: number) => {
    const updated = [...tasks];
    updated.splice(index, 1); 
    setTasks(updated);
  }

  //редактирование
  const startEditing = (index:number, text:string) => {
    setEditingIndex(index);
    setEditingText(text);
  }


 //сохранение редактирования
 const saveEditing = (index: number) => {
  const updated = [...tasks];
  updated[index].text = editingText;
  setTasks(updated);
  setEditingIndex(null);
  setEditingText("");
 }

  //получение задач по фильтру
  const filteredTasks = tasks.filter((tasks) => {
    if (filter === "active") return !tasks.done;
    if (filter === "completed") return tasks.done;
    return true;
  });

  const activeCount = tasks.filter((task) => !task.done).length;

  return (
    <div className={`App ${theme === "dark" ? "dark" : "light"}`}>
      <ThemeToggle darkMode={theme === "dark"} setTheme={setTheme} />
      <h1>Мои задачи</h1>
      <InputSection input={input} setInput={setInput} addTask={addTask} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <p className="task-counter">
        Осталось выполнить: <strong>{activeCount}</strong>
      </p>
      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        startEditing={startEditing}
        saveEditing={saveEditing}
        editingIndex={editingIndex}
        editingText={editingText}
        setEditingText={setEditingText}
      />
    </div>
  );
}

export default App;