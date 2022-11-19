import { useState } from 'react';
import PropTypes from 'prop-types';

const ToggleCompletedVisibility = (props) => {
  const [isVisible, setVisibility] = useState(true);
  const { changeVisibility } = props;

  function handleChange() {
    setVisibility(!isVisible);
    changeVisibility(!isVisible);
  }

  return (
    <form>
      <input type="checkbox" checked={isVisible} onChange={handleChange} />
      &nbsp; Show completed tasks
    </form>
  );
};

ToggleCompletedVisibility.propTypes = {
  changeVisibility: PropTypes.func.isRequired,
};

export default ToggleCompletedVisibility;
