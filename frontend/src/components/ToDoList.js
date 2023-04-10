import axios from 'axios';
import Checkbox from './Checkbox';
import TextInput from './TextInput';
import { useState } from 'react';

export default function ToDoList(props) {
    const data = props.data;
    const [selectedTodo, setSelectedTodo] = useState();
    const [newToDoName, setNewToDoName] = useState("");
    const [editToDoName, setEditToDoName] = useState("");

    function deleteTask(id) {
        axios.delete("http://localhost:8080/" + id)
        console.log('delete' + id)
    }
    function createToDo() {
        const toDo = {
            completed: false,
            content: newToDoName
        };
        axios.post("http://localhost:8080/", toDo)
            .then(() => {
                console.log('To do successfully created');
            })
            .catch(error => {
                console.error('To do unsuccessfully created', error);
            });
    }
    function updateToDo() {
        const editToDo = {
            completed: selectedTodo.completed,
            content: editToDoName
        };
        axios.put("http://localhost:8080/" + selectedTodo.id, editToDo)
            .then(() => {
                console.log('To do successfully updated');
            })
            .catch(error => {
                console.error('To do unsuccessfully updated', error);
            });
    }

    return (
        <div>
            <section>
                <TextInput text={newToDoName} setText={setNewToDoName} placeholder="Add a new task"/>
                <button onClick={() => createToDo()}>+</button>
            </section>
            <ul>
                {
                    data.map((toDo) => {
                        return (
                        <li key={toDo.id}>
                            <Checkbox toDo={toDo} />
                            {toDo.content}
                            <button onClick={() => {
                                setSelectedTodo(toDo)
                                setEditToDoName(toDo.content)
                            }}>Edit</button>
                            <button onClick={() => deleteTask(toDo.id)}>Delete</button>
                        </li>
                    )})
                }
            </ul>
            <section>
                <TextInput text={editToDoName} setText={setEditToDoName} placeholder="Select a task to edit"/>
                <button onClick={() => updateToDo()}>Save</button>
            </section>
        </div>
    )
}

