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
  insertImage:function(){
    console.log('clicke')
  },
  render: function () {
    return (
      <div>
        <RaisedButton label="Default" onClick={this.insertImage}/>
        <Card>
          <CardMedia>
            <img src="http://pic.prepics-cdn.com/gundamseed/11962007.jpeg"/>
          </CardMedia>
          <CardTitle title="アウル・ニーダ" subtitle="ガンダムSEED Destiny"/>
            </Card>
          </div>

    );
  }
});

injectTapEventPlugin()
React.render(<MyButton />, document.body);
