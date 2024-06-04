const http = require('http');

const app = http.createServer();

app.on('request', (_, res) => {
  const text = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', text.length);
  res.statusCode = 200;
  res.write(Buffer.from(text));
});

app.listen(1245, 'localhost', () => {
  process.stdout.write('small HTTP server is listening on: http://localhost:1245\n');
});

module.exports = app;
