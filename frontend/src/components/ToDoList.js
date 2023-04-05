
export default function ToDoList(props) {
    const data = props.data;
    return (
        <ul>
            {
                data.map((toDo) => {
                    return (
                        <li key={toDo.id}>{toDo.task}</li>
                    )
                })
            }
        </ul>
    )
}

