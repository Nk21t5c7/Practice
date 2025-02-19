

import React from "react";
import CardContainer from "./layouts/CardContainer";

const CardList = ({ allTodos }) => {
    return (
        <div className="grid grid-cols-3 gap-4 h-fit">
            {
                Object.values(allTodos)[0].map((todo, i) => {
                    console.log(todo);
                    return <CardContainer key={i} todo={todo} />
                })
            }
        </div>
    )
};

export default CardList;
