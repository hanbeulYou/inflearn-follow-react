import React from 'react'

export default function List({ todoData, setTodoData }) {


  const handleCompleteChange = (id) => {
    const newTodoData = todoData.map((data) => {
      if(data.id === id) {
        data.completed = !data.completed
      }
      return data
    })
    setTodoData(newTodoData)
  }
  
  const listStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    }
  }

  const handleClick = (id) => {
    const newTodoData = todoData.filter(data => data.id !== id)
    setTodoData(newTodoData)
  }

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  }

  return (
    <div>
      {todoData.map(data => (
        <div style={listStyle(data.completed)} key={data.id}>
        <input 
          type="checkbox"
          onChange={() => handleCompleteChange(data.id)}
          defaultChecked={data.completed}
        />
        {" "}{data.title}
        <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
        </div>
      ))}
    </div>
  )
}