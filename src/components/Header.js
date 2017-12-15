import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle?(<h2>{props.subtitle}</h2>):undefined}
    </div>
  );
};

Header.defaultProps = {
  title: 'The IndecisionApp'
};

export default Header;
