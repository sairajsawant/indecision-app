import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.state = {
      options: [],
      selectedOption: undefined
    };
  }
  componentDidMount() {
    //CLASS BASED Component LIFECYCLE METTHODS

    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({options}));
      }
    } catch (e) {

    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options); //convert optionsarray to string
      localStorage.setItem('options',json);

    }
  }
  componentWillUnmount() {

    console.log('componentWillUnmount');
  }
  handleCloseModal() {
    this.setState(() => ({selectedOption: undefined}));
  }
  handleDeleteOptions() {
    // this.setState(() => {
    //   return {
    //     options : []
    //   };
    // });
    this.setState(() => ({options :[] })); //a shorthand arrow function
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => (optionToRemove !== option))
    }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * (this.state.options.length));
    const randomOption = this.state.options[randomNum];
    this.setState(() => ({selectedOption: randomOption}))
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
      <div className="container">
        <Action
           hasOptions={this.state.options.length > 0}
           handlePick={this.handlePick}
         />
        <div className="widget">
          <Options
             options={this.state.options}
             handleDeleteOptions={this.handleDeleteOptions}
             handleDeleteOption={this.handleDeleteOption}
           />
          <AddOption
            handleAddOption = {this.handleAddOption}
          />
        </div>
      </div>
      <OptionModal
        handleCloseModal = {this.handleCloseModal}
        selectedOption = {this.state.selectedOption}
      />
      </div>
    );
  }
}

export default IndecisionApp;
