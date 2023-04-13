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
        setNewToDoName("");
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
        setEditToDoName("");
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
        <svg width="39.5" height="39.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 22H5C4.44772 22 4 21.5523 4 21V11.357C4.01549 11.1119 4.11964 10.8809 4.293 10.707L11.293 3.70698C11.4806 3.51921 11.7351 3.4137 12.0005 3.4137C12.2659 3.4137 12.5204 3.51921 12.708 3.70698L19.708 10.707C19.8957 10.8943 20.0009 11.1488 20 11.414V21C20 21.5523 19.5523 22 19 22ZM12 5.82798L6 11.828V20H18V11.828L12 5.82798ZM12 17.999C11.792 17.814 11.557 17.621 11.308 17.417L11.261 17.379C10.104 16.435 8.661 15.26 8.661 13.799C8.66116 13.3149 8.85626 12.8513 9.20228 12.5129C9.5483 12.1744 10.0161 11.9895 10.5 12C11.0722 11.9984 11.6179 12.2411 12 12.667C12.3822 12.2412 12.9278 11.9986 13.5 12C13.9834 11.9906 14.4503 12.1761 14.7955 12.5147C15.1407 12.8532 15.3351 13.3165 15.335 13.8C15.335 15.266 13.883 16.449 12.717 17.4L12.66 17.447C12.423 17.641 12.199 17.824 11.999 18.001L12 17.999Z"
            fill="#7A85D7" />
        </svg>
        Daily Tasks</h1>
      <div className='wrap'>
        <form onSubmit={createToDo}>
          <section className='create-submit'>
            <TextInput text={newToDoName} setText={setNewToDoName} placeholder="Add a new task" />
            <button type="submit" className='button-submit'>
              <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM13 17H11V13H7V11H11V7H13V11H17V13H13V17Z"
                  fill="#7A85D7" />
              </svg>
            </button>
          </section>
        </form>
        <ul>
          {
            toDos.map((toDo) => {
              return (
                <li className='list-todo' key={toDo.id}>
                  <Checkbox toDo={toDo} />
                  {toDo.content}
                  <button onClick={() => {
                    setSelectedTodo(toDo)
                    setEditToDoName(toDo.content)
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.41999 20.579C4.13948 20.5785 3.87206 20.4603 3.68299 20.253C3.49044 20.0475 3.39476 19.7695 3.41999 19.489L3.66499 16.795L14.983 5.48103L18.52 9.01703L7.20499 20.33L4.51099 20.575C4.47999 20.578 4.44899 20.579 4.41999 20.579ZM19.226 8.31003L15.69 4.77403L17.811 2.65303C17.9986 2.46525 18.2531 2.35974 18.5185 2.35974C18.7839 2.35974 19.0384 2.46525 19.226 2.65303L21.347 4.77403C21.5348 4.9616 21.6403 5.21612 21.6403 5.48153C21.6403 5.74694 21.5348 6.00146 21.347 6.18903L19.227 8.30903L19.226 8.31003Z"
                        fill="#7A85D7" />
                    </svg>
                  </button>
                  <button onClick={() => deleteTask(toDo.id)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 22H7C5.89543 22 5 21.1046 5 20V7H3V5H7V4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V5H21V7H19V20C19 21.1046 18.1046 22 17 22ZM7 7V20H17V7H7ZM9 4V5H15V4H9ZM15 18H13V9H15V18ZM11 18H9V9H11V18Z"
                        fill="#7A85D7" />
                    </svg>
                  </button>
                </li>
              )
            })
          }
        </ul>
        <form onSubmit={updateToDo}>
        <section className='update-submit'>
            <TextInput text={editToDoName} setText={setEditToDoName} placeholder="Select a task to edit" />
            <button type='submit' className='button-submit'>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19.411L12.3 16.711L13.714 15.295L15 16.583L20.008 11.583L21.419 13L15 19.41V19.411ZM11 17H2V15H11V17ZM15 13H2V11H15V13ZM15 9H2V7H15V9Z"
                fill="#7A85D7" />
            </svg>
            </button>
            </section>
          </form>
      </div>
    </div>
  );
}

export default App;
