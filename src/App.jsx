import { useEffect, useState } from "react";
import "../src/App.css";


import InputSection from "../components/InputSection";
import FilterButtons from "../components/FilterButtons";
import TaskList from "../components/TaskList";
import ThemeToggle from "../components/ThemeToggle";

//Главная функция-компонент
function App() {
  //загружаем задачи и тему из LocalStorage при старте
  const [tasks, setTasks] = useState(() => {
   const saved = localStorage.getItem("tasks");
   return saved ? JSON.parse(saved) : []; 
  })

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  })
  
  const darkMode = theme === "dark"

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  //для редактирования задачи
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");


  //сохраняем задачи и тему в LocalStorage при изменении
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  //добавляем задачи
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, {text: input, done: false}]); //добавляем задачу в массив
      setInput(""); //очищаем поле
    }
  };

  //переключение выполнения
  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done; //меняем флаг выполнено\не выполнено
    setTasks(updated);
  };

  //кнопка удаления
  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1); //удаляем 1 элемент по индексу
    setTasks(updated);
  }

  //редактирование
  const startEditing = (index, text) => {
    setEditingIndex(index);
    setEditingText(text);
  }


 //сохранение редактирования
 const saveEditing = (index) => {
  const updated = [...tasks];
  updated[index].text = editingText;
  setTasks(updated);
  setEditingIndex(null);
  setEditingText("");
 }

  //получени задач по фильтру
  const filteredTasks = tasks.filter((tasks) => {
    if (filter === "active") return !tasks.done;
    if (filter === "completed") return tasks.done;
    return true;
  });

  const totalCount = tasks.length;
  const activeCount = tasks.filter((task) => !task.done).length;
  const completedCount = totalCount - activeCount;

  //вернем JSX(интерфейс)
  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <ThemeToggle darkMode={darkMode} setTheme={setTheme} />
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