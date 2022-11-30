import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
// c'est le même que
// function TodoList(props){...}
const TodoList = (props) => {
  // const todos = props.todos;
  const {
    todos,
    handleChangeProps,
    deleteTodoProps,
    setUpdate,
  } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};
// const gneu=[{id:"1", completed:true, title:"cul"},
//   {id:"2", completed:true, title:"pouet"}];

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    completed: PropTypes.bool,
    title: PropTypes.string,
  })).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoList;
