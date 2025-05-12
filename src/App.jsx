import './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg'
const App = () => {
  const quat = "Quát hihi";
  const a = 22;
  const data = {
    address: "HaNoi",
    country: "VietNam"
  }
  //{Key:value}
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>

      <TodoNew />

      <TodoData
        name={quat}
        age={a}
        data={data}
      />

      <div className='todo-image'>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
    </div>
  )
}


export default App
