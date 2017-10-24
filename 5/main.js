const http = require('http');
const fs = require('file-system');

http.get('http://wttr.in/~kharkov', (res) => {
  let result = '';
  if (res.statusCode !== 200) throw new Error(res.statusCode);
  res.setEncoding('utf-8');
  res.on('data', data => result += data); 
  res.on('end', () => {
    fs.writeFile('weather.html', result, function(err) {
      if (err) return console.log(err);
    });
  });
});