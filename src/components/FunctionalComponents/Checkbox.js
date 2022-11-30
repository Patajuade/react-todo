import React from 'react';

function CheckBox(props) {
  return (
    <h2>
      Hi, I am a
      {props.color}
      {' '}
      Car!
    </h2>
  );
}
²
export default Checkbox;

// pas besoin de mettre ça c'est déjà dans index.js

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const element = <Welcome name="Sara" />;
// root.render(element);
