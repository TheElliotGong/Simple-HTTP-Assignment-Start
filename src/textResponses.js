/*
Author: Elliot Gong
Date: 9/9/2023
Purpose: Handle server responses that utilize text responses.
*/

//set greeting.
const hello = 'Hello World';

/**
 * This function returns the current Date.
 * @returns a string representation of the current Date.
 */
const getTimeString = () => {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return dateString;
};

/**
 * This function returns a given text message as part of a successful server response.
 * @param {*} request 
 * @param {*} response 
 * @param {*} message 
 */
const getMessage = (request, response, message) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(message);
  response.end();
};

//Export necessary functions/properties.
module.exports = {
  hello,
  getTimeString,
  getMessage,
};
