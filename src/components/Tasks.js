import Task from './Task'


// tasks -> tasks , onDelete <- onDelete , onToggle <- onToggle 

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))
      
      }
    </>
  )
}

export default Tasks