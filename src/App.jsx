import './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg'
import { useState } from "react"


const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: 'Learn React' },
    // { id: 2, name: 'Learn Redux' }
  ])

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

  //filter: tạo ra 1 mảng mới từ mảng cũ
  const deleteTodo = (id) => {
    var newTodoList = todoList.filter((item) => item.id !== id);// chỉ giữ item có id khác với id truyền vào
    setTodoList(newTodoList);
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


      {todoList.length > 0 ?
        <TodoData
          todoList={todoList}
          deleteTodo={deleteTodo}
        />

        :

        <div className='todo-image'>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
      }

      {/*
      {todoList.length > 0 &&
        <TodoData
          todoList={todoList}
        />
      }

      {todoList.length === 0 &&
        <div className='todo-image'>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
      }
      */}
    </div>
  )
}


export default App
