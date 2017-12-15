import React from 'react';

export default class AddOption extends React.Component{
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
    if (!error) {
      e.target.elements.option.value = '';
    }
    // this.setState(() => {
    //   return {error};
    // });
    this.setState(() => ({error}));
  }
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form onSubmit={this.handleAddOption} className="add-option">
          <input className="add-option__input" type="text" name="option"></input>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
