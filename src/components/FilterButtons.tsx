import React from "react";
import { ButtonField } from "../filds/ButtonField";

interface FilterButtonsProps {
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({filter, setFilter}) => {
 return (
    <div className="filters">
        <ButtonField name={filter === "all" ? "active" : ""} onClick={() => setFilter("all")} text="Все"/>
        <ButtonField name={filter === "active" ? "active" : ""} onClick={() => setFilter("active")} text="Активные"/>
        <ButtonField name={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")} text="Выполненные"/>
    </div>
 )
}

export default FilterButtons;