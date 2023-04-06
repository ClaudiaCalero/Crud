import axios from 'axios';

export default function ToDoList(props) {
    const data = props.data;
    function deleteTask(id) {
        axios.delete("http://localhost:8080/" + id)
        console.log("delete" +id)
    }
    return (
        <ul>
            {
                data.map((toDo) => {
                    return (
                        <li key={toDo.id}>{toDo.task}<button onClick={() => deleteTask(toDo.id)}>delete</button></li>
                    )
                })
            }
        </ul>
    )
}

