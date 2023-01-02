// import axios from 'axios';
import { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import TodoList from '../components/TodoList';
// import useAxios from '../hooks/useAxios';
import axios from 'axios';



const url = "https://6352596cffbb7da0f2d5f171.mockapi.io/api/todos"


const Home = () => {
  //custom hooktan da çekip burada çağırıp ve componentlere props olarak geçebiliriz. Bunları ilgili componentlerde de çağırabilirdik. Ama propslar typescriptte nasıl kullanılıyor onu görmek adına bu şekilde kullanabiliriz

  // const { todos, getTodos, addTodo, deleteTodo, toggleTodo } = useAxios()
const [todos, setTodos] = useState<TodoType[]>([])
  
const getTodos = async() =>{
    
  try {
    const {data} = await axios.get<TodoType[]>(url)
    console.log(data)
    setTodos(data)
  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
  getTodos()
}, [])

const addTodo:AddFn = async(text) => {
  const newTodo ={
    task:text,
    isDone:false
  }
  try {
    await axios.post(url, newTodo)
  } catch (error) {
    
  }

}

  return (
    <div className='main'>
      <InputForm addTodo = {addTodo}/>
      <TodoList todos = {todos}/>
    </div>
  )
}

export default Home