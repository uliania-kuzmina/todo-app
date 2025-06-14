import React from "react";

const TaskItem = ({
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
    const isEditing = editingIndex === indexedDB;

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
