class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
    };
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options : []
      };
    });
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * (this.state.options.length));
    const randomOption = this.state.options[randomNum];
    alert(randomOption);
  }
  handleAddOption(singleOption){
    if(!singleOption){
      return 'Enter valid option!';
    }else if (this.state.options.indexOf(singleOption) > -1) {
      return 'Option already exists!';
    }
    this.setState((prevState) => {
      return {
        options : prevState.options.concat(singleOption)
      };
    });

  }
  render() {
    const subtitle = 'Decide your task!';
    return (
      <div>
      <Header subtitle={subtitle}/>
      <Action
         hasOptions={this.state.options.length > 0}
         handlePick={this.handlePick}
       />
      <Options
         options={this.state.options}
         handleDeleteOptions={this.handleDeleteOptions}
       />
      <AddOption
        handleAddOption = {this.handleAddOption}
      />
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options: []
};
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
// class Header extends React.Component{
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Action = (props) =>{
  return (
    <div>
      <button
         disabled={!props.hasOptions}
         onClick={props.handlePick}
      >
      What should I do?
      </button>
    </div>
  );
};
// class Action extends React.Component{
//   render() {
//     return (
//       <div>
//         <button
//            disabled={!this.props.hasOptions}
//            onClick={this.props.handlePick}
//         >
//         What should I do?
//         </button>
//       </div>
//     );
//   }
// }
const Options = (props) => {
  return (  <div>
      <button onClick={props.handleDeleteOptions}>Remove All!</button>
      {
        props.options.map((singleOption) => <Option key={singleOption} optionText={singleOption}/>)
      }
    </div>
  );
};
// class Options extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render() {
//     return (
//         <div>
//           <button onClick={this.props.handleDeleteOptions}>Remove All!</button>
//           {
//             this.props.options.map((singleOption) => <Option key={singleOption} optionText={singleOption}/>)
//           }
//         </div>
//     );
//   }
// }
const Option = (props) => {
  return (
    <div>
      {<p>{props.optionText}</p>}
    </div>
  );
};
// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         {<p>{this.props.optionText}</p>}
//       </div>
//     );
//   }
// }
class AddOption extends React.Component{
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state ={
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault(); //remove fulll page refresh
    const opt = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(opt);
    e.target.elements.option.value = '';
    this.setState(() => {
      return {error};
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// const User = (props) => {
//   //Stateless Functional Component --faster
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//     </div>
//   );
// };
ReactDOM.render(<IndecisionApp options={['Code','Learn']}/>, document.getElementById('app'));
