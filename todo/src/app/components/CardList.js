

import React from "react";
import CardContainer from "./layouts/CardContainer";

const CardList = ({ allTodos }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {/* {console.log(Object.values(allTodos)[0])} */}
            {/* {console.log(Array.isArray(allTodos))} */}
            {
                Object.values(allTodos)[0].map((todo, i) => {
                    // return (
                    console.log(todo);
                    // return (
                    return <CardContainer key={i} todo={todo} />
                    // ))
                    // )
                })
            }
        </div>
    )
};

export default CardList;
