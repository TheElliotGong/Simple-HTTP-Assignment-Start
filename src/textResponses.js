const hello = 'Hello World';

const getTimeString = () => {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return dateString;
};

const getMessage = (request, response, message) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(message);
  response.end();
};

module.exports = {
  hello,
  getTimeString,
  getMessage,
};
