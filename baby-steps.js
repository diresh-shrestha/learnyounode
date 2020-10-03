/* Write a program that accepts one or more numbers as command-line arguments  
  and prints the sum of those numbers to the console (stdout). */

'use strict'

var sum = 0
//i starts from 2 because process.argv's first element in the array is "node"
//and second element is the filepath. The command-line arguments begin from the
//third element.
for (let i = 2; i < (process.argv).length; i++) {
	sum += +process.argv[i];    //the inputs are in string format so prefixing +
				    // to process.argv[i] casts them into a number
	// alternatively could use Number(process.argv[i])
}

console.log(sum);
