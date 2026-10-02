function TodoForm({ setTodos }) {
    let value = ' ';
    return (
        <div>
            <input placeholder='Wpisz zadanie...'d
            onChange = {e => (value = e.target.value)} 
            />
            <button
            onClick={() => {
                setTodos(prevTodos => [...prevTodos , value]);
                value = ' ';
            }}>
            Dodaj
            </button>
        </div>
    );
}
export default TodoForm;