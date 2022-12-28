import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

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

  const handleEnd = (result) => {
    if(!result.destination) return

    const newTodoData = todoData
    const [reorderedItem] = newTodoData.splice(result.source.index, 1)
    newTodoData.splice(result.destination.index, 0, reorderedItem)
    setTodoData(newTodoData)
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId='todo'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => {
                    <div 
                      key={data.id} 
                      {...provided.draggableProps} 
                      ref={provided.innerRef} 
                      {...provided.dragHandleProps}
                      className={`${snapshot.isDragging ? "bg-gray-400" : ""} flex items-center justify-between w-full px-4 py-1 my-2`}
                    >
                      <div className='item-center'>
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
                  }}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}