import axios from 'axios';
import Checkbox from './Checkbox';

export default function ToDoList(props) {
    const data = props.data;
    function deleteTask(id) {
        axios.delete("http://localhost:8080/" + id)
        console.log("delete" + id)
    }
    function createTask() {

    }

    return (
        <div>
            <section class="task-input">
                <input type="text" placeholder="Add a new task" />
            </section>
            <ul>
                {
                    data.map((toDo) => {
                        return (
                            <li key={toDo.id}>
                                <Checkbox toDo={toDo} />
                                {toDo.task}
                                <button onClick={() => deleteTask(toDo.id)}>delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

