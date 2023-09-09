/*
Author: Elliot Gong
Date: 9/9/2023
Purpose: Handle server responses for client requests.
*/

// Prepare all necessary fields and other scripts.
const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');
const imageHandler = require('./imageResponses.js');

const port = process.env.Port || process.env.NODE_PORT || 3000;

/**
 * This function handles server responses to browser requests.
 * @param {*} request
 * @param {*} response
 */
const onRequest = (request, response) => {
  // console.log(request.url);

  // Produce different responses depending on the end url on the server.
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
      jsonHandler.getJSONMessage(request, response, { time: jsonHandler.text.getTimeString() });
      break;
    case '/dankmemes':
      imageHandler.getImage(request, response);
      break;
    default:
      htmlHandler.getPage(request, response, htmlHandler.index);
      break;
  }
};

// Set up the request handler when the server is created.
http.createServer(onRequest).listen(port, () => {
  // console.log(`Listening on 127.0.0.1:${port}`);
});
