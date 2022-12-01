import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import styles from '../TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);
  const input = useRef(null);

  const { todo } = props;
  const { completed, id, title } = todo;
  const { handleChangeProps, deleteTodoProps, setUpdate } = props;

  const stopEditing = () => setEditing(false);

  const handleEditing = async () => {
    await setEditing(true);
    input.current.focus();
  };
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const date = new Date();
  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button type="button" onClick={() => deleteTodoProps(id)}>
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        ref={input}
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
        onBlur={stopEditing}
      />
      <div className="TodoItemDate">
        <p>
          Added :
          <span>
            {date.getDay()}
            /
            {date.getMonth()}
            /
            {date.getUTCFullYear()}
          </span>
        </p>
        <p>
          At :
          <span>
            {date.getHours()}
            :
            {date.getMinutes()}
            :
            {date.getSeconds()}
          </span>
        </p>

      </div>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    completed: PropTypes.bool,
    title: PropTypes.string,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
