const TodoNew = (props) => {
    console.log("Check props TodoNew", props.addNewTodo);

    const { addNewTodo } = props;
    addNewTodo("test");
    return (
        <div className="todo-input">
            <input className='search' type="text" placeholder="Enter your task" />
            <button className='todo-button-add'>Add</button>
        </div>
    );
}
export default TodoNew