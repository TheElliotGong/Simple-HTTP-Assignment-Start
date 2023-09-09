/*
Author: Elliot Gong
Date: 9/9/2023
Purpose: Handle server responses that utilize image files.
*/

const fs = require('fs');
// Import the desired img file.
const img = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

/**
 * Function: Return the desired image to the client as part of the server response.
 * @param {*} request
 * @param {*} response
 */
const getImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(img);
  response.end();
};
// Save the function as part of the modules exports.
module.exports.getImage = getImage;
