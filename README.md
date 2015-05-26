Basic-Format-String
===================

A basic string formatter to make ugly string concatenations a thing of the past.

## Installation
  
    npm install basic-format-string

## Usage

    var format = require('basic-format-string');

    var input = 'hello {0}';

    console.log(format(input, 'world'));

## Tests

    npm test

