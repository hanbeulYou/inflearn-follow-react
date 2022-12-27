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

  const handleClick = (id) => {
    const newTodoData = todoData.filter(data => data.id !== id)
    setTodoData(newTodoData)
  }

  return (
    <div>
      {todoData.map(data => (
        <div key={data.id}>
          <div className='flex items-center justify-between w-full px-4 py-1 my-2 '>
            <div className='items-center'>
              <input 
                type="checkbox"
                onChange={() => handleCompleteChange(data.id)}
                defaultChecked={data.completed}
              />
              <span className={data.completed ? "line-through" : undefined}>{" "}{data.title}</span>
            </div>
            <div className='items-center'>
              <button onClick={() => handleClick(data.id)}>x</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}