const fs = require('file-system');

fs.mkdirSync('date');
fs.writeFile('date/test.txt', new Date().toLocaleDateString(), function(err) {
  if (err) return console.log(err);
});