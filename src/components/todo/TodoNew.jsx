const TodoNew = (props) => {
    console.log("Check props TodoNew", props.addNewTodo);

    const { addNewTodo } = props;
    // addNewTodo("test");
    const handlerClick = () => {
        alert("Click me");
    }

    // const handleOnChange = (event) => {
    //     console.log(">>> onChange", event.target.value);
    // }

    const handleOnChange = (name) => {
        console.log(">>> onChange", name);
    }

    return (
        <div className="todo-input">
            <input className='search'
                type="text"
                placeholder="Enter your task"
                // onChange={handleOnChange}
                onChange={(event) => { handleOnChange(event.target.value) }}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handlerClick}// tham chiếu hàm
            >Add</button>
        </div>
    );
}
export default TodoNew