console.log('App.js is running');

//JSX -JavaScript XML
const appInfo = {
  title : 'Indecision App',
  subtitle : 'An app helping u do!',
  options : ['One','Two']
};
const template = (
    <div>
      <h1>{appInfo.title}</h1>
      {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
    </div>
);
function getLoc(loc) {
  const knownLoc = (<p>Location : {loc}</p>);
  return (loc ? knownLoc:undefined);
}
const user = {
  name : 'Shubhz',
  age : 19,
//  loc : 'Digras'
}; // an object
const templateTwo = (
    <div>
      <h1>{user.name ? user.name : 'Anonymous'}</h1>
      {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
      {getLoc(user.loc)}
    </div>
);
const appRoot = document.getElementById('app');
ReactDOM.render(template,appRoot);
