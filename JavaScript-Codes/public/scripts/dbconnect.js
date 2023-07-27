var mysql = require('mysql')

var connection = mysql.createConnection({
  host: '192.168.10.150',
  user: 'dac60',
  password: 'welcome',
  database: 'dac60'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})