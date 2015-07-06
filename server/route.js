if (Meteor.isServer) {
  var fs = Npm.require('fs');
  var path = Npm.require('path');
  Router.map(function() {
    this.route('serverRoute', {
      path: '/',
      where: 'server',
      action: function() {
        var base = process.env.PWD
        var path = base + '/public/index.html'
        var data = fs.readFileSync(path);
        this.response.end(data);
      }
    });
  });
}
