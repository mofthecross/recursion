// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
//
// var stringifyJSON = function(obj) {
var stringifyJSON = function(obj) {
  var stringItOn = {
    string: function() { return '"' + obj + '"';},
    number: function() { return obj + "";},
    boolean: function() { return obj + "";},
    object: function() {
      if (Array.isArray(obj)) {
        return "[" + obj.map(function(item) {
          return stringifyJSON(item);
        }) + "]";
      } else if (obj === null) { return "null";
      } else {
        var results = [];
        for (var key in obj) {
          if (typeof obj[key] !== 'function'&& obj[key] !== undefined) {
            results.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
          }
        }
        return '{' + results + '}';
      }
    }
  }
  return stringItOn[typeof obj](obj);
 };
