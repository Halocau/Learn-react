// const TodoData = ({ name, age, data }) => {
const TodoData = (props) => {
    //props: là 1 biến object {}
    // {
    //     name: "top 1 server",
    //     age: 22,
    //     data: { }
    // }

    //BEGINER
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;

    //JUNIOR
    const { todoList, deleteTodo } = props; // cần dùng thuộc tính nào thì lấy thuộc tính đó

    const handleClick = (id) => {
        alert(`Do you want to delete this todo id: ${id} `);
        deleteTodo(id);
    }

    console.log("Check data props => ", props.todoList);
    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                console.log("Check item => ", item, index);
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.id} - {item.name}</div>
                        <button style={{ cursor: "pointer" }} onClick={() => deleteTodo(item.id)} >Delete</button>

                    </div>

                );
                // dung return thì chỉ có 1 thẻ cha
                // truyen func chu ko phai goi function (arrow function)
                //reason no write funtion deleteToDo in TodoData.jsx is beacause App,jsx control TodoList
                // write function deleteToDo in App.jsx
            })}
        </div>
    );
}

export default TodoData

