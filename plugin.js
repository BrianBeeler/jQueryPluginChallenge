// Task:
// Create a jQuery plugin which will reverse the order of the text of a DOM element, 
// alternate the colors of each character according to two color parameters which are 
// passed to the plugin, and inject the reversed/colored text immediately after the original element.

$.fn.reverseAndColor = function(color1,color2) {
  var text = this.text();
  var newText = "";
  for (var i = text.length-1; i>=0; i--) {
    if (i%2===0) {
      newText+= "<span style='color:"+color1+"'>" + text[i] + "</span>";
    }
    else {
      newText+= "<span style='color:"+color2+"'>" + text[i] + "</span>";
    }
  }
  this.append(newText);
}

