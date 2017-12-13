console.log('App.js is running');
//JSX -JavaScript XML
const appInfo = {
  title : 'Indecision App',
  subtitle : 'An app helping u do!',
  options : []
};
const onFormSubmit = (e) => {
  //form returns e object
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option)
  {
    appInfo.options.push(option);
    e.target.elements.option.value = '';
    renderer();
  }
};
const removeAll = () => {
  appInfo.options = [];
  renderer();

};
const makeDecision = () => {
    const randomNum = Math.floor((Math.random() * appInfo.options.length));
    const randomOption = appInfo.options[randomNum];
    alert(randomOption);
};
const appRoot = document.getElementById('app');
function renderer() {
  const template = (
      <div>
        <h1>{appInfo.title}</h1>
        {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
        <button disabled={(appInfo.options.length == 0)} onClick={makeDecision}>What should I do?</button>
        <button onClick={removeAll}>Remove All options!</button>
        <ol>
          {appInfo.options.map((singleOption) => { return (<li key = {singleOption}>{singleOption}</li>);})}
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option"></input>
          <button >Add Option</button>
        </form>
        </div>
  );
  ReactDOM.render(template,appRoot);
}
renderer();
