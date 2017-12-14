'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityToggle = function (_React$Component) {
  _inherits(VisibilityToggle, _React$Component);

  function VisibilityToggle(props) {
    _classCallCheck(this, VisibilityToggle);

    var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

    _this.handletoggleDetails = _this.handletoggleDetails.bind(_this);
    _this.state = {
      showHide: false,
      showHideText: 'Show '
    };
    return _this;
  }

  _createClass(VisibilityToggle, [{
    key: 'handletoggleDetails',
    value: function handletoggleDetails() {

      this.setState(function (prevState) {
        if (prevState.showHide != true) {
          return {
            showHide: true,
            showHideText: 'Hide '
          };
        } else {
          return {
            showHide: false,
            showHideText: 'Show '
          };
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        React.createElement(
          'button',
          { onClick: this.handletoggleDetails },
          this.state.showHideText,
          ' details'
        ),
        this.state.showHide ? React.createElement(
          'p',
          null,
          this.props.details
        ) : undefined
      );
    }
  }]);

  return VisibilityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggle, { title: 'Visibility Toggle', details: 'Hey, this blah blah' }), document.getElementById('app'));

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
