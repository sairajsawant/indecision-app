import React from 'react';
import Option from './Option';
const Options = (props) => (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All!</button>
      {props.options.length === 0 && <p>Please add an Option to Get Started</p>}
      {
        props.options.map(
          (singleOption) => 
          <Option
            key={singleOption}
            optionText={singleOption}
            handleDeleteOption={props.handleDeleteOption}
          />)
      }
    </div>
  );

export default Options;
