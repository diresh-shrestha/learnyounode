/* Create a program that prints a list of files in a given directory,  
  filtered by the extension of the files. You will be provided a directory  
  name as the first argument to your program (e.g. '/path/to/dir/') and a  
  file extension to filter by as the second argument.  
   
  For example, if you get 'txt' as the second argument then you will need to  
  filter the list to only files that end with .txt. Note that the second  
  argument will not come prefixed with a '.'.  
   
  Keep in mind that the first arguments of your program are not the first  
  values of the process.argv array, as the first two values are reserved for  
  system info by Node.  
   
  The list of files should be printed to the console, one file per line. You  
  must use asynchronous I/O.  */

"use strict";

const fs = require("fs");
//path module to work with file paths, extend file paths, etc.
const path = require("path");

const folder = process.argv[2];
//add "." to the file extension argument
let ext = "." + process.argv[3];

//.readdir() reads the contents of a directory
fs.readdir(folder, function (err, files) {
  if (err) {
    return console.log(err);
  }
  //files is an array of contents inside the directory
  //forEach(callback(currentValue)) iterates over elements inside an array
  files.forEach(function (file) {
    //path.extname() finds the extension of the filename
    //if the extensions match, console.log
    if (path.extname(file) === ext) console.log(file);
  });
});
