import React,{useState} from 'react'

// type Task = string;
interface IInputForm {
  addTodo:AddFn;
}
type Task = string;


const InputForm:React.FC<IInputForm> = ({addTodo}) => {
  // const [task,setTask] = useState<Task>("")
  const [task, setTask] = useState<Task>("")
  const handleClick = () =>{
    addTodo(task)
    setTask("")
  }

  return (
    <div className="input-form">
      <input
        className="input-task"
        placeholder="Enter the todo..."
        type="text"
        maxLength={40}
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        
      />
      <button
        className="btn-hover btn-color"
        type="submit"
        onClick={handleClick}

      >
        Add New Todo
      </button>
    </div>
  )
}

export default InputForm