import React from "react";

interface InputSectionProps {
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    addTask: () => void;
}

const InputSection: React.FC<InputSectionProps> = ({ input, setInput, addTask}) => {
 return (
        <div className="input-section">
            <input
             type="text"
             value={input}
             onChange={(e) => setInput(e.target.value)}
             placeholder="Новая задача"
            />
            <button onClick={addTask}>➕</button>
        </div>
    )
}

export default InputSection;