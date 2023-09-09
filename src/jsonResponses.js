/*
Author: Elliot Gong
Date: 9/9/2023
Purpose: Handle server responses that utilize JSON formatting.
*/

//Include textResponses script to assist with JSON responses.
const text = require('./textResponses.js');

/**
 * This function returns text in JSON form as a server response.
 * @param {*} request 
 * @param {*} response 
 * @param {*} message the message to be returned.
 */
const getJSONMessage = (request, response, message) => {
  const stringMessage = JSON.stringify(message);
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

//Export the function/property.
module.exports = {
  getJSONMessage, text,
};
