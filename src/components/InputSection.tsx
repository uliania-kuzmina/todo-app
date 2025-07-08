import React from "react";
import { InputField } from "../filds/InputField";
import { ButtonField } from "../filds/ButtonField";

interface InputSectionProps {
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    addTask: () => void;
}

const InputSection: React.FC<InputSectionProps> = ({ input, setInput, addTask}) => {
 return (
        <div className="input-section">
            <InputField
                name="new-task-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Новая задача"
                onKeyDown={(e) => { if (e.key === "Enter") addTask(); }}
            />
            <ButtonField name="new-task-btn" text="➕" onClick={addTask}/>
        </div>
    )
}

export default InputSection;