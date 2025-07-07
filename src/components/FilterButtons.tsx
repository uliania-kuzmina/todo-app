import React from "react";

interface FilterButtonsProps {
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({filter, setFilter}) => {
 return (
    <div className="filters">
        <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>Все</button>
        <button className={filter === "active" ? "active" : ""} onClick={() => setFilter("active")}>Активные</button>
        <button className={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")}>Выполненные</button>
    </div>
 )
}

export default FilterButtons;