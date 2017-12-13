'use strict';

console.log('App.js is running');
//JSX -JavaScript XML
var appInfo = {
  title: 'Indecision App',
  subtitle: 'An app helping u do!',
  options: []
};
var onFormSubmit = function onFormSubmit(e) {
  //form returns e object
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    appInfo.options.push(option);
    e.target.elements.option.value = '';
    renderer();
  }
};
var removeAll = function removeAll() {
  appInfo.options = [];
  renderer();
};
var appRoot = document.getElementById('app');
function renderer() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      appInfo.title
    ),
    appInfo.subtitle && React.createElement(
      'p',
      null,
      appInfo.subtitle
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove All options!'
    ),
    React.createElement(
      'p',
      null,
      appInfo.options.length
    ),
    React.createElement(
      'ol',
      null,
      React.createElement('li', null),
      React.createElement('li', null)
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
}
renderer();
