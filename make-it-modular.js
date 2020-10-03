'use strict'

const mymodule = require('./mymodule');
const folder = process.argv[2];
const fileExt = process.argv[3];

mymodule(folder, fileExt, function(err, list) {
    if (err) return err;
    list.forEach(function (file) {
        console.log(file);
    })
}) 

