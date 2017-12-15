import React from 'react';

const Option = (props) => (
    <div>
      {<p>{props.optionText}</p>}
      <button onClick={(e) => {props.handleDeleteOption(props.optionText)}}>Remove</button>
    </div>
  );

// export { Option as default }
export default Option;
