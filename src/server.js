const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');
const imageHandler = require('./imageResponses.js');

const port = process.env.Port || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  // console.log(request.url);
  switch (request.url) {
    case '/':
      htmlHandler.getPage(request, response, htmlHandler.index);
      break;
    case '/page2':
      htmlHandler.getPage(request, response, htmlHandler.page2);
      break;
    case '/hello':
      textHandler.getMessage(request, response, textHandler.hello);
      break;
    case '/time':
      textHandler.getMessage(request, response, textHandler.getTimeString());
      break;
    case '/helloJSON':
      jsonHandler.getJSONMessage(request, response, { message: jsonHandler.text.hello });
      break;
    case '/timeJSON':
      jsonHandler.getTimeJSON(request, response, { time: jsonHandler.text.getTimeString() });
      break;
    case '/dankmemes':
      imageHandler.getImage(request, response);
      break;
    default:
      htmlHandler.getPage(request, response, htmlHandler.index);
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  // console.log(`Listening on 127.0.0.1:${port}`);
});
