import React, { useState, useCallback } from "react"
import "./App.css"
import Form from "./components/Form"
import Lists from "./components/Lists"

export default function App() {
  
  const initialTodoData = localStorage.getItem("todoData") 
    ? JSON.parse(localStorage.getItem("todoData")) 
    : []
  const [todoData, setTodoData] = useState(initialTodoData)
  const [value, setValue] = useState("")
  
  const handleRemoveClick = () => {
    setTodoData([])
    localStorage.setItem("todoData", JSON.stringify([]))
  }

  // React.memo , useCallback, useMemo 공부하기
  const handleClick = useCallback((id) => {
    const newTodoData = todoData.filter(data => data.id !== id)
    setTodoData(newTodoData)
    localStorage.setItem("todoData", JSON.stringify(newTodoData))
  }, [todoData])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    }
    setTodoData(prev => [...prev, newTodo])
    localStorage.setItem("todoData", JSON.stringify([...todoData, newTodo]))
    setValue("")
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-50">
      <div className="w-full p-6 m-4 bg-white rounded shadow-sm lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>
            할 일 목록
          </h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </div>

        <Lists 
          todoData={todoData} 
          setTodoData={setTodoData} 
          handleClick={handleClick}
        />
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit}/>
        {/* handle submit을 props로 보내는 이유는 함수 내부에 다른 state가 존재하기 때문(setTodoData) */}

      </div>
    </div>
  )
}