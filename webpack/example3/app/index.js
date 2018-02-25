// #1 - Using NPM
var $ = require('jquery');
console.log("loaded jQuery version is " + $.fn.jquery);

// #2 - Using alias
import $2 from 'Vendor/jquery-2.2.4.min.js';
console.log("loaded jQuery version is " + $2.fn.jquery);

// #3 - Using Provide Plugin
console.log("loaded jQuery version is " + $3.fn.jquery);
