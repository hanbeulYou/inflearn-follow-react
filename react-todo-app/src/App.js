import React, {useState} from "react"
import "./App.css"
import Form from "./components/Form"
import List from "./components/List"

export default function App() {
  const [todoData, setTodoData] = useState([])
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    }
    setTodoData(prev => [...prev, newTodo])
    setValue("")
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-50">
      <div className="w-full p-6 m-4 bg-white rounded shadow-sm lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>
            할 일 목록
          </h1>
        </div>

        <List todoData={todoData} setTodoData={setTodoData}/>
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit}/>
        {/* handle submit을 props로 보내는 이유는 함수 내부에 다른 state가 존재하기 때문(setTodoData) */}

      </div>
    </div>
  )
}