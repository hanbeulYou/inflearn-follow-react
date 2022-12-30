import React from 'react'

const List = React.memo(({
    id, title, completed, todoData, setTodoData, provided, snapshot
  }) => {

  const handleCompleteChange = (id) => {
    const newTodoData = todoData.map((data) => {
      if(data.id === id) {
        data.completed = !completed
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
    <div 
      key={id} 
      {...provided.draggableProps} 
      ref={provided.innerRef} 
      {...provided.dragHandleProps}
      className={
        `${snapshot.isDragging ? "bg-gray-50" : ""} flex items-center justify-between w-full px-4 py-1 my-2`
      } >
      <div className='items-center'>
        <input 
          type="checkbox"
          onChange={() => handleCompleteChange(id)}
          defaultChecked={completed}
        />
        <span className={completed ? "line-through" : undefined}>{" "}{title}</span>
      </div>
      <div className='items-center'>
        <button onClick={() => handleClick(id)}>x</button>
      </div>
    </div>
  )
})

export default List
