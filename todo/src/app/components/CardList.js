

import React, { useEffect } from "react";
import CardContainer from "./layouts/CardContainer";

const CardList = ({ allTodos }) => {
    let todoArray = null;
    useEffect(() => {
        todoArray = Array.isArray(Object.values(allTodos)[0])
            ? Object.values(allTodos)[0]
            : Object.entries(allTodos)[1];

    }, []);


    return (
        <div className="grid grid-cols-3 gap-4 h-fit">
            {todoArray && 
                todoArray.map((todo, i) => {
                    console.log(todo);
                    return <CardContainer key={i} todo={todo} />
                })
            }
        </div>
    )
};

export default CardList;
