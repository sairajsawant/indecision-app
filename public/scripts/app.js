'use strict';

var appInfo = {
  title: 'Visibility Toggle',
  details: 'Hey, this blah blah!'
};
var appRoot = document.getElementById('app');
var showHide = false;
var showHideText = 'Show ';
var toggleDetails = function toggleDetails() {
  if (!showHide) {
    showHide = true;
    showHideText = 'Hide ';
  } else {
    showHide = false;
    showHideText = 'Show ';
  }
  renderer();
};
function renderer() {

  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      appInfo.title
    ),
    React.createElement(
      'button',
      { onClick: toggleDetails },
      showHideText,
      ' details'
    ),
    showHide ? React.createElement(
      'p',
      null,
      appInfo.details
    ) : undefined
  );
  ReactDOM.render(template, appRoot);
}
renderer();
