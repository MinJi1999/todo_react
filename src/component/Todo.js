import * as React from 'react';

const TODOS_LS = "toDos";

function Todo() {

    const [toDoList, setToDoList] = React.useState([]);
    const [toDoName, setToDoName] = React.useState('');

    function deleteToDo(targetId) {
        setToDoList(prev => prev.filter(({ id }) => id !== targetId));
    }

    function saveToDos() {
        localStorage.setItem(TODOS_LS, JSON.stringify(toDoList));
    }

    function paintToDo(text) {
        const id = toDoList.length + 1;
        const target = {
            text,
            id,
        }
        setToDoList(prev => [...prev, target]);
        setToDoName('');
    }

    function handleSubmit(event) {
        event.preventDefault();
        paintToDo(toDoName);
    }

    function loadToDos() {
        const loadedToDos = localStorage.getItem(TODOS_LS);
        if (loadedToDos) {
            const parsedToDos = JSON.parse(loadedToDos);
            setToDoList(parsedToDos);
        }
    }

    function init() {
        loadToDos();
    }

    React.useEffect(() => {
        init();
    }, []);

    React.useEffect(() => {
        if (toDoList.length > 0)
            saveToDos();
    }, [toDoList]);

    return (
        <div>
            <form className="js-toDoForm todo_form" onSubmit={handleSubmit}>
                <input className="todo_input" type="text" value={toDoName} onChange={e => setToDoName(e.currentTarget.value)} placeholder="Write a to do" />
            </form>
            <ul type="none" className="js-toDoList todo_list">
                {
                    toDoList.map(({ text, id }) => {
                        return (
                            <li key={id.toString()}>
                                <span>
                                    {text}
                                </span>
                                <button onClick={() => deleteToDo(id)}>
                                    <span>❌</span>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Todo;