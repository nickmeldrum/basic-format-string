var format = require('../lib/format-string').dotNetStyle;

exports['test'] = {
  'dotnetstyle: with no positional we just get the same output as we input': function(test) {
    test.expect(1);
    
    var string = 'hello everyone';
    var newstring = format(string, 'world');

    test.equal(newstring, 'hello everyone', 'string don\'t look right');
    test.done();
  },
  'dotnetstyle: adds a string into 1 position': function(test) {
    test.expect(1);
    
    var string = 'hello {0}';
    var newstring = format(string, 'world');

    test.equal(newstring, 'hello world', 'string don\'t look right');
    test.done();
  },
  'dotnetstyle: adds arguments in positional order': function(test) {
    test.expect(1);
    
    var string = 'hello {1} {2} {0}';
    var newstring = format(string, '1', '2', '3');

    test.equal(newstring, 'hello 2 3 1', 'string don\'t look right');
    test.done();
  }
};   

