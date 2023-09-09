// include fs module for reading files.
const fs = require('fs');

// Include paths to html files.
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

/**
 * This function returns the desired web page using the given name
 * @param {*} request
 * @param {*} response
 * @param {*} pageName the name of the page to be returned.
 */
const getPage = (request, response, pageName) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(pageName);
  response.end();
};

// Save the functions and variables into the the exports
module.exports = {
  getPage,
  index,
  page2,
};
