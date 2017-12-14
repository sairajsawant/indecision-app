class VisibilityToggle extends React.Component{
  constructor(props) {
    super(props);
    this.handletoggleDetails = this.handletoggleDetails.bind(this);
    this.state = {
      showHide : false,
      showHideText : 'Show '
    };
  }
  handletoggleDetails() {

    this.setState((prevState)=>{
        if (prevState.showHide != true) {
          return {
            showHide : true,
            showHideText : 'Hide '
          };
        }
        else {
          return {
            showHide : false,
            showHideText : 'Show '
          };
        }

    });

  }
  render() {
    return (
        <div>
          <h1>{this.props.title}</h1>
          <button onClick={this.handletoggleDetails}>{this.state.showHideText} details</button>
          {this.state.showHide?(<p>{this.props.details}</p>):undefined}
        </div>
      );
  }
}

ReactDOM.render(<VisibilityToggle title="Visibility Toggle" details="Hey, this blah blah"/>,document.getElementById('app'));


// const appInfo = {
//   title : 'Visibility Toggle',
//   details : 'Hey, this blah blah!'
// };
// const appRoot = document.getElementById('app');
// let showHide = false;
// let showHideText = 'Show ';
// const toggleDetails = () => {
//   if (!showHide) {
//     showHide = true;
//     showHideText = 'Hide ';
//   }
//   else {
//     showHide = false;
//     showHideText = 'Show ';
//   }
//   renderer();
// };
// function renderer() {
//
//   const template = (
//     <div>
//       <h1>{appInfo.title}</h1>
//       <button onClick={toggleDetails}>{showHideText} details</button>
//       {showHide?(<p>{appInfo.details}</p>):undefined}
//     </div>
//
//   );
//   ReactDOM.render(template,appRoot);
// }
// renderer();
