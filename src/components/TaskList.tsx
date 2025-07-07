import React from "react";
import { Task } from "../types/types";
import TaskItem from "./TaskItem";

interface TaskListProps {
    tasks: Task[];
    toggleTask: (index: number) => void;
    deleteTask: (index: number) => void;
    startEditing: (index: number, text: string) => void;
    saveEditing: (index: number) => void;
    editingIndex: number | null;
    editingText: string;
    setEditingText: React.Dispatch<React.SetStateAction<string>>;
}

const TaskList = ({
    tasks,
    toggleTask, 
    deleteTask,
    startEditing,
    saveEditing,
    editingIndex,
    editingText,
    setEditingText,
}) => {
    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
               <TaskItem
                key={index}
                index={index}
                task={task}
                toggleTask={toggleTask} 
                deleteTask={deleteTask}
                startEditing={startEditing}
                saveEditing={saveEditing}
                editingIndex={editingIndex}
                editingText={editingText}
                setEditingText={setEditingText}
                />
            ))}
        </ul>
    )
}

export default TaskList;