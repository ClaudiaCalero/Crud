import axios from 'axios';

export default function ToDoList(props) {
    const data = props.data;
    function deleteTask(id) {
        axios.delete("http://localhost:8080/" + id)
        console.log("delete" + id)
    }
    function checkbox(id) {
        axios.put("http://localhost:8080/1" + id)
            .then(() => {
                console.log('Task is succesfully completed');
            })
            .catch(error => {
                console.error('Task is not completed', error);
            });
    }
    return (
        <ul>
            {
                data.map((toDo) => {
                    return (
                        <li key={toDo.id}>{toDo.task}
                            <button onClick={() => deleteTask(toDo.id)}>delete</button>
                            <input type="checkbox" onClick={() => checkbox(toDo.id)}></input>
                        </li>
                    )
                })
            }
        </ul>
    )
}

