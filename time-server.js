const net = require('net');

const port = process.argv[2];

function addZero(i) {
  return (i < 10 ? '0' : '') + i;
}

function returnDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();
  return `${year}-${addZero(month)}-${addZero(date)} ${addZero(hour)}:${addZero(minute)}`;
}

const server = net.createServer((socket) => {
  socket.end(`${returnDate()}\n`);
});

server.listen(port);
