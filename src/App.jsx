import './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg'
import { useState } from "react"


const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: 'Learn React' },
    { id: 2, name: 'Learn Redux' }
  ])

  const quat = "Quát hihi";
  const a = 22;
  const data = {
    address: "HaNoi",
    country: "VietNam"
  }
  //{Key:value}
  // ko nên sửa trục tiếp vào state của react vì nó sẽ dễ dẫn tới bug
  const addNewTodo = (name) => {
    const newToDo = {
      id: randomIntFromInterval(1, 1000),// random id
      name: name
    }
    setTodoList([...todoList,// copy mảng cũ
      newToDo// thêm phần tử mới vào cuối mảng
    ]);
  }


  const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>

      <TodoNew
        addNewTodo={addNewTodo}// chỉ truyền func chứ ko thực thi func
      />

      <TodoData
        name={quat}
        age={a}
        data={data}
        todoList={todoList}
      />

      <div className='todo-image'>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
    </div>
  )
}


export default App
