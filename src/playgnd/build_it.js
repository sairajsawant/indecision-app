const appInfo = {
  title : 'Visibility Toggle',
  details : 'Hey, this blah blah!'
};
const appRoot = document.getElementById('app');
let showHide = false;
let showHideText = 'Show ';
const toggleDetails = () => {
  if (!showHide) {
    showHide = true;
    showHideText = 'Hide ';
  }
  else {
    showHide = false;
    showHideText = 'Show ';
  }
  renderer();
};
function renderer() {

  const template = (
    <div>
      <h1>{appInfo.title}</h1>
      <button onClick={toggleDetails}>{showHideText} details</button>
      {showHide?(<p>{appInfo.details}</p>):undefined}
    </div>

  );
  ReactDOM.render(template,appRoot);
}
renderer();
