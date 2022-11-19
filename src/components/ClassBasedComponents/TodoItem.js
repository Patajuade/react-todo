import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import styles from '../TodoItem.module.css';

class TodoItem extends React.Component {
  completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  }

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    this.input = React.createRef();
    this.handleEditing = this.handleEditing.bind(this);
    this.handleUpdatedDone = this.handleUpdatedDone.bind(this);
  }

  componentDidMount() {
    this.input.current.focus();
  }

  async handleEditing() {
    const newState = { ...this.state, editing: true };
    this.setState(newState, () => this.input.current.focus());
  }

  handleUpdatedDone(event) {
    if (event.key === 'Enter') {
      this.stopEditing();
    }
  }

  stopEditing() {
    const newState = { ...this.state, editing: false };
    this.setState(newState);
  }

  render() {
    const viewMode = {};
    const editMode = {};
    const {
      editing,
    } = this.state;
    const {
      todo, handleChangeProps, deleteTodoProps, setUpdate,
    } = this.props;
    const { completed, title, id } = todo;
    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    return (
      <li className={styles.item}>
        <span>With   class</span>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => handleChangeProps(id)}
          />
          <button type="button" onClick={() => deleteTodoProps(id)}>
            <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
          </button>
          <span style={completed ? this.completedStyle : null}>{title}</span>
        </div>
        <input
          type="text"
          ref={this.input}
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            setUpdate(e.target.value, id);
          }}
          onBlur={() => {
            this.stopEditing();
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

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
