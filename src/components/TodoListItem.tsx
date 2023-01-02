import React from 'react';
interface IListItem {
  item : TodoType;
}

const TodoListItem:React.FC<IListItem> = ({item}) => {
  return (

    <li>
      {item.isDone ? <p className="checked">{item.task}</p>:<p>{item.task}</p> }
      
      
      <span className='task-icons'>X</span>


    </li>
  );
};

export default TodoListItem