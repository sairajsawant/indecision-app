
//JSX doesnot have builtin data binding!!
let count = 0;
const addOne = () =>{
  count++;
  renderz();
};
const minusOne = () =>{
  count--;
  renderz();
};
const reset = () =>{
  count = 0;
  renderz();
};
const appRoot = document.getElementById('app');
const renderz = () => {
  //rendering and re-rendering
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateTwo,appRoot);
};

renderz();
