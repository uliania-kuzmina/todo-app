import React from "react";
import TaskItem from "./TaskItem";

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
        <ul>
            {tasks.map((task, index) => (
               <TaskItem
                key={index}
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