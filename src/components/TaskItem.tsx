import React from "react";
import { Task } from "../types/types";
import { InputField } from "../filds/InputField";
import { ButtonField } from "../filds/ButtonField";

interface TaskItemProps {
  index: number;
  task: Task;
  toggleTask: (index: number) => void;
  deleteTask: (index: number) => void;
  startEditing: (index: number, text: string) => void;
  saveEditing: (index: number) => void;
  editingIndex: number | null;
  editingText: string;
  setEditingText: React.Dispatch<React.SetStateAction<string>>;
}

const TaskItem: React.FC<TaskItemProps> = ({
  index,
  task,
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
    <li className={`task-item ${task.done ? "done" : ""}`}>
      <InputField
        type="checkbox"
        checked={task.done}
        onChange={() => toggleTask(index)}
        name="task-checkbox"
      />

      {isEditing ? (
        <InputField
          type="text"
          value={editingText}
          onChange={(e) => setEditingText(e.target.value)}
          onBlur={() => saveEditing(index)}
          onKeyDown={(e) => {
            if (e.key === "Enter") saveEditing(index);
          }}
          name="task-text edit-input"
        />
      ) : (
        <span
          className="task-text"
          onDoubleClick={() => startEditing(index, task.text)}
        >
          {task.text}
        </span>
      )}

      <ButtonField
        name="delete-btn"
        onClick={() => deleteTask(index)}
        aria-label="Удалить задачу"
        text="×"
      />
    </li>
  );
};

export default TaskItem;
