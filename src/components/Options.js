import React from 'react';
import Option from './Option';
const Options = (props) => (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__xs">Your Options</h3>
        <button
           onClick={props.handleDeleteOptions}
           className="button button--link"
        >
          Remove All
        </button>
      </div>
      {props.options.length === 0 && <p className="widget__message">Please add an Option to Get Started</p>}
      {
        props.options.map(
          (singleOption, index) =>
          <Option
            key={singleOption}
            optionText={singleOption}
            count={index+1}
            handleDeleteOption={props.handleDeleteOption}
          />)
      }
    </div>
  );

export default Options;
