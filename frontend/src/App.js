import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  const data = [
    {
      "id": 1,
      "task": "Fer el Front",
      "completed": false
    },
    {
      "id": 2,
      "task": "Acabar estructura Back sense test",
      "completed": true
    },
    {
      "id": 3,
      "task": "Test acabats",
      "completed": false
    },
    {
      "id": 4,
      "task": "Se me da genial hacer test",
      "completed": false
    },
    {
      "id": 5,
      "task": "Se me da genial hacer test",
      "completed": false
    }
  ]
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDoList
        data={data}
      />

    </div>
  );
}

export default App;
