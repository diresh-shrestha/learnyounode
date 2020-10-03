/* Write a program that uses a single asynchronous filesystem operation to  
  read a file and print the number of newlines it contains to the console  
  (stdout), similar to running cat file | wc -l.  
   
  The full path to the file to read will be provided as the first  
  command-line argument.  */

  'use strict'

  const fs = require('fs');
  const file = process.argv[2];

  //for asynchronous filesystem use .readFile()
  fs.readFile(file, 'utf8', function(err, data) {
      if (err) {
          return console.log(err);
      }
      const lines = data.split("\n").length - 1;
      console.log(lines);
  })