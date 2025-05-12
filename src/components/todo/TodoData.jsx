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
    const { name, age, data } = props; // cần dùng thuộc tính nào thì lấy thuộc tính đó

    console.log("Check data props => ", props);
    return (
        <div className='todo-data'>
            <div>My name is {name}</div>
            <div>Learn {age}</div>
            <div>Learn 1 {data.address}</div>
        </div>
    );
}

export default TodoData