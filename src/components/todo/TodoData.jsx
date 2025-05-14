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
    const { todoList } = props; // cần dùng thuộc tính nào thì lấy thuộc tính đó

    console.log("Check data props => ", props.todoList);
    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                console.log("Check item => ", item, index);
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.id} - {item.name}</div>
                        <button>Delete</button>
                    </div>

                );// dung return thì chỉ có 1 thẻ cha
            })}
        </div>
    );
}

export default TodoData