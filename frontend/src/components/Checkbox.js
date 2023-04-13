import axios from "axios";
import { useState } from "react";

export default function Checkbox(props) {
    const toDo = props.toDo;
    const [isCompleted, setIsCompleted] = useState(toDo.completed);
    function onClickHandler(toDo) {
        const completed = isCompleted ? false : true;
        toDo.completed = completed;
        axios.put("http://localhost:8080/" + toDo.id, toDo)
            .then(() => {
                console.log('Task is succesfully completed');
            })
            .catch(error => {
                console.error('Task is not completed', error);
            });
        setIsCompleted(completed);
    }
    return (
        <div className={`check ${isCompleted && 'checked'}`} onClick={() => onClickHandler(toDo)} checked={isCompleted}></div>
    )
}

