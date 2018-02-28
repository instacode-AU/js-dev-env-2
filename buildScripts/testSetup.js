// This file isn't transpiled, so you must use CommonJS and ES5

//Register babel to reanspile before our tests run
require('babel-register')();

//Disable webpack features that Mocha cannot understand.
require.extensions['.css'] = function() {};

