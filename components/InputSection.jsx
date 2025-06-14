import React from "react";

const InputSection = ({ input, setInput, addTask}) => {
 return (
        <div className="input-section">
            <input
             value={input}
             onChange={(e) => setInput(e.target.value)}
             placeholder="Новая задача"
            />
            <button onClick={addTask}>➕</button>
        </div>
    )
}

export default InputSection;