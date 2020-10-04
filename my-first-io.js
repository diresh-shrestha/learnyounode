/* Write a program that uses a single synchronous filesystem operation to
  read a file and print the number of newlines (\n) it contains to the
  console (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first
  command-line argument (i.e., process.argv[2]). You do not need to make
  your own test file.

 */

// fs required for filesystem operation
const fs = require('fs');

// All synchronous filesystem methods in the fs module end with 'Sync'
// readFileSync returns a buffer object. use 'utf8' as 2nd argument
// to convert it into a string. Alternatively, use .toString() method
const file = fs.readFileSync(process.argv[2], 'utf8');
// split based on \n characters
const lines = file.split('\n').length - 1;

console.log(lines);
