import React from "react";
import { Task } from "../types/types";

interface TaskItemProps {
    task: Task;
    index: number;
    toggleTask: (index: number) => void;
    deleteTask: (index: number) => void;
    startEditing: (index: number, text: string) => void;
    saveEditing: (index: number) => void;
    editingIndex: number | null;
    editingText: string;
    setEditingText: React.Dispatch<React.SetStateAction<string>>;
}

const TaskItem: React.FC<TaskItemProps> = ({
    task,
    index,
    toggleTask, 
    deleteTask,
    startEditing,
    saveEditing,
    editingIndex,
    editingText,
    setEditingText,
}) => {
    const isEditing = editingIndex === index;

    return (
        <li key={index} className={`task-item ${task.done ? "done" : ""}`}>
          {isEditing ? (
            <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
            onBlur={() =>saveEditing(index)}
            onKeyDown={(e) => {
                if (e.key === "Enter") saveEditing(index);
            }}
            autoFocus
            />
        ) : (
            <>
            <span onClick={() => toggleTask(index)}
                onDoubleClick={() => startEditing(index, task.text)}
            >
                {task.text}
            </span>
            <button className="deoete-btn" onClick={() => deleteTask(index)}>
                ❌
            </button>
            </>
        )}
    </li>
    )
}

export default TaskItem;
