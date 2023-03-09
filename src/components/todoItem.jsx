import React, { useEffect, useState } from 'react';

const TodoItem = (props) => {
        const [todoItem, setTodoItem] = useState(props.data);

        useEffect(() => {
            console.log("hey, todo item just changed", todoItem);
        }, [todoItem])

//        function updateIsDone() {
//            setTodoItem({...todoItem, isDone:!todoItem.isDone })
//            todoItem.isDone = !todoItem.isDone;
//        }



    return (
        <>
            <input 
                type="checkbox" 
                checked={todoItem.isDone} 
                onChange={() => setTodoItem({...todoItem, isDone:!todoItem.isDone })} 
            />
            <span> {todoItem.task} </span>
        </>
    ); 
};

export default TodoItem;