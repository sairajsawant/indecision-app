import React from 'react';

const Option = (props) => {
  return (
    <div>
      {<p>{props.optionText}</p>}
      <button onClick={(e) => {props.handleDeleteOption(props.optionText)}}>Remove</button>
    </div>
  );
};

// export { Option as default }
export default Option;
