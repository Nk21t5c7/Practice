

import React, { useEffect, useState } from "react";
import CardContainer from "./layouts/CardContainer";

const CardList = ({ allTodos }) => {
    const [todoArray, setTodoArray] = useState(null);

    useEffect(() => {
        setTodoArray(allTodos);
        console.log(todoArray);

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
