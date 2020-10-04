/* Create a file named http-client.js.

  Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Write the String contents of each
  "data" event from the response to a new line on the console (stdout).

 */

// the http module allows you to create a server and issue HTTP
// requests and responses.
const http = require('http');

const url = process.argv[2];
// call the get method to initiate a get request
// the arguments are the url and a callback function
http
  .get(url, (res) => {
    // setEncoding method will convert the "data" events into
    // strings instead of Node Buffer objects
    res.setEncoding('utf8');
    res.on('data', (data) => {
      console.log(data);
    });
    res.on('error', console.error);
  })
  .on('error', console.error);
