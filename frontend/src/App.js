import { useEffect, useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import axios from 'axios';

function App() {
  const [toDos, setToDos] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/")
      .then((response) => {
        setToDos(response.data);
      })
  }, [])
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDoList
        data={toDos}
      />

    </div>
  );
}

export default App;
