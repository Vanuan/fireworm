var fireworm = require('../index')

var c = fireworm('./')
c.add('**/*.js')

c.on('change', function(filepath){
  console.log(filepath, 'changed')
})

setInterval(function(){}, 1000)