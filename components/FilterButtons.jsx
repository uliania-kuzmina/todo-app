import React from "react";

const FilterButtons = ({filter, setFilter}) => {
 return (
<div className="filters">
<button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>Все</button>
<button className={filter === "active" ? "active" : ""} onClick={() => setFilter("active")}>Активные</button>
<button className={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")}>Выполненные</button>
</div>
 )
}

export default FilterButtons;