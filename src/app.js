class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Decide your task!';
    const options = ['1st opt','2nd option','3rd option'];
    return (
      <div>
      <Header title={title} subtitle={subtitle}/>
      <Action />
      <Options options={options}/>
      <AddOption />
      </div>
    );
  }
}

class Header extends React.Component{
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component{
  handlePick() {
    alert('handlePick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component{
  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
    alert('handleRemoveAll');
  }
  render() {
    return (
        <div>
          <button onClick={this.handleRemoveAll}>Remove All!</button>
          {
            this.props.options.map((singleOption) => <Option key={singleOption} optionText={singleOption}/>)
          }
        </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {<p>{this.props.optionText}</p>}
      </div>
    );
  }
}
class AddOption extends React.Component{
  handleAddOption(e) {
    e.preventDefault(); //remove fulll page refresh
    const opt = e.target.elements.option.value.trim();
    if(opt)
      alert(opt);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
