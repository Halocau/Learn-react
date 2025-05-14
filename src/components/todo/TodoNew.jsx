import { useState } from "react";

const TodoNew = (props) => {

    //useState hook
    // const valueInput = "quat";
    //[name value, function to update value]
    // biến truyền vào và hàm để cập nhật giá trị
    const [valueInput, setValueInput] = useState("quat");

    const { addNewTodo } = props;

    // addNewTodo("test");
    const handlerClick = () => {
        addNewTodo(valueInput);

    }

    // const handleOnChange = (event) => {
    //     console.log(">>> onChange", event.target.value);
    // }

    const handleOnChange = (name) => {
        console.log(">>> onChange", name);
        setValueInput(name);
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
            <div>My text input is: {valueInput} </div>
        </div>
    );
}
export default TodoNew