// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {}


function getNum(string){
  var res = {};
  var regex = {
    number : /^[\s*"-]?\d+(\.\d+)?/,
    method : function(string) { return string.trim().match(regex.number);}
  };
  if (regex.method(string)) {
    res.value = Number(regex.method(string)[0]),
    res.newStr = string.replace(regex.number, "");
  }
  return res;
}

 function getBool(string){
   var res = {};
   var regex = {
     boolean: /^["\s*]?false|true/,
     method: function(string) { return string.match(regex.boolean);}
   };
   if (regex.method(string)){
     res.value = Boolean(regex.method(string)[0]);
     res.newStr = string.replace(regex.boolean, "");
 }
 return res

}

function getNull(string) {
  var res = {};
  var regex = {
    null: /^[\s*"]?null["]?/,
    method: function(string) { return string.match(regex.null) }
  }
  if(regex.method(string)) {
    res.val = null;
    res.newStr = string.replace(regex.null, "");
  }
  return res;
}
