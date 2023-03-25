import React, { useEffect, useState } from 'react';

const TodoItem = (props) => {
        const [todoItem, setTodoItem] = useState(props.data);
        const [isDirty, setDirty] = useState(false);

        useEffect(() => {
            if (isDirty) {
                            fetch(`http://localhost:8080/api/todoItems/${todoItem.id}`, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(todoItem),
            })
                .then(response => response.json()).then(data => {
                setDirty(false);
                setTodoItem(data);
            });
            }

        }, [todoItem, isDirty]);

//        function updateIsDone() {
//            setTodoItem({...todoItem, isDone:!todoItem.isDone })
//            todoItem.isDone = !todoItem.isDone;
//        }




    return (
        <div>
            <input 
                type="checkbox" 
                checked={todoItem.isDone} 
                onChange={() => {
                    setDirty(true);
                    setTodoItem({...todoItem, isDone:!todoItem.isDone })}} 
            />
            {todoItem.isDone ? 
                    ( <span style={{ textDecoration: "line-through" }} >{todoItem.task}</span> ) 
                :  
                    (<input type="text" value={todoItem.task} onChange={(e)=> {
                        setDirty(true);
                        setTodoItem({ ...todoItem, task: e.target.value });
                    }}/>)
            }

            
            {/* <span> {todoItem.task} </span> */}
        </div>
    ); 
};

export default TodoItem;