import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Checkbox from './components/Checkbox';
import TextInput from './components/TextInput';


function App() {
  const [toDos, setToDos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState();
  const [newToDoName, setNewToDoName] = useState("");
  const [editToDoName, setEditToDoName] = useState("");

  function deleteTask(id) {
    axios.delete("http://localhost:8080/" + id)
      .then(() => {
        console.log('delete' + id);
        refreshToDos();
      })
      .catch(error => {
        console.error('Task could not be deleted', error);
      });
  }

  function createToDo() {
    const toDo = {
      completed: false,
      content: newToDoName
    };
    axios.post("http://localhost:8080/", toDo)
      .then(() => {
        console.log('To do successfully created');
        refreshToDos();
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
        refreshToDos();
      })
      .catch(error => {
        console.error('To do unsuccessfully updated', error);
      });
  }

  function refreshToDos() {
    axios.get("http://localhost:8080/")
      .then((response) => {
        setToDos(response.data);
      })
  }

  useEffect(() => {
    refreshToDos();
  }, []);

  return (
    <div className="App">
      <h1 className='Title'>
        <img src='https://cdn-icons-png.flaticon.com/512/813/813670.png' width="30" />
        Tasks</h1>
      <div>
        <section>
          <TextInput text={newToDoName} setText={setNewToDoName} placeholder="Add a new task" />
          <button onClick={() => createToDo()}>+</button>
        </section>
        <ul>
          {
            toDos.map((toDo) => {
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
              )
            })
          }
        </ul>
        <section>
          <TextInput text={editToDoName} setText={setEditToDoName} placeholder="Select a task to edit" />
          <button onClick={() => updateToDo()}>Save</button>
        </section>
      </div>
    </div>
  );
}

export default App;
