// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var hasClass = function(className,node) {
  var list = node.classList;
  return list === undefined ? false : list.contains(className);
};
var getElementsByClassName = function(className, node) {
  node = node || document.body;
  var results = hasClass(className,node) ? [node] : [];

  for (var i = 0; i < node.childNodes.length; i++){
    results = results.concat(getElementsByClassName(className, node.childNodes[i]));
  }
  return results;
};
