var React = require('react')
var injectTapEventPlugin = require("react-tap-event-plugin")
var mui = require('material-ui')
var ThemeManager = new mui.Styles.ThemeManager()
var RaisedButton = mui.RaisedButton;
var Card = mui.Card;
var CardMedia = mui.CardMedia;
var CardTitle = mui.CardTitle;

var Asteroid = require('asteroid.browser')
var ceres = new Asteroid("localhost:3000");
console.log(ceres)



var syotas_data = [
  {
    name: 'アウル・ニーダ',
    anime: "ガンダムSEED Destiny",
    image: "http://pic.prepics-cdn.com/gundamseed/11962007.jpeg"
  }, {
    name: '潮田渚',
    anime: "暗殺教室",
    image: "http://blog-imgs-65.fc2.com/s/y/o/syokusyu56/BxQt20yCMAEHKct.jpg"
  }, {
    name: 'コバヤシ少年',
    anime: "乱歩奇譚",
    image: "http://blog-imgs-64.fc2.com/y/a/r/yaraon/1435853488172.jpg"
  }
]

var MyButton = React.createClass({
  getInitialState: function () {
    return {
      syotas: []
    };
  },
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  insertImage: function () {
    var syotas = this.state.syotas.slice()
    syotas.unshift(syotas_data.pop())
    this.setState({syotas:syotas})
  },
  render: function () {
    var syotas_card = this.state.syotas.map(function (syota) {
      return (
        <div>
          <Card>
            <CardMedia>
              <img src={syota.image}/>
            </CardMedia>
            <CardTitle subtitle={syota.anime} title={syota.name}/>
          </Card>
        </div>
      )
    })
    return (
      <div>
        <RaisedButton label="ショタ召喚" onClick={this.insertImage}/>
          {syotas_card}
      </div>

    );
  }
});

injectTapEventPlugin()
React.render(<MyButton />, document.body);
