var capture = function(data){
  var notifier = require('node-notifier');
  var cowsay = require("cowsay");
  var cowtext = cowsay.say({data.toString().trim()});

  notifier.notify({
    'title': 'My notification',
    'message': cowtext


  });
};
process.stdin.on("data",capture);
