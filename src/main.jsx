var React = require('react')
var injectTapEventPlugin = require("react-tap-event-plugin")
var mui = require('material-ui')
var ThemeManager = new mui.Styles.ThemeManager()
var RaisedButton = mui.RaisedButton;
var Card = mui.Card;
var CardMedia = mui.CardMedia;
var CardTitle = mui.CardTitle;

var MyCard = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  render: function () {
    return (
      <Card />
    );
  }
});

var MyButton = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  render: function () {
    return (
      <div>
        <RaisedButton label="Default"/>
        <Card>
          <CardMedia overlay={ < CardTitle title = "Title" subtitle = "Subtitle" />}>
            <img </CardMedia src="http://lorempixel.com/600/337/nature/"/>>

            </Card>
          </div>

    );
  }
});

injectTapEventPlugin()
React.render(<MyButton />, document.body);
