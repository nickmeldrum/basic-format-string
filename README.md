Basic-Format-String
===================

A basic string formatter to make ugly string concatenations a thing of the past.

## Installation
  
    npm install basic-format-string

## Usage

### For dotnet/ c# style string formatting:

    var format = require('basic-format-string').dotNetStyle;

    var input = 'hello {0}';

    console.log(format(input, 'world'));

## Tests

    npm test

