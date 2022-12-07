function writeTextByJS(id, text, speed){

    var ele = document.getElementById(id),
      txt = text.join("").split("");

  var interval = setInterval(function(){

      if(!txt[0]){

            return clearInterval(interval);
     };

      ele.innerHTML += txt.shift();
   }, speed != undefined ? speed : 300);

   return false;
};
writeTextByJS(
    "citation",
     [
         "WELCOME!",
      ]
  );
  var height = $(".list li:first-child").outerHeight();
// Get the number of items
var itemLength = $(".list li").length
// Set the currentItem to 0
var currentItem = 0
// Set the initial scroll to height so the first interval goes to item[1]
var scroll = height

setInterval(function() {

  $('.list').animate({
    scrollTop: scroll
  }, 500);
  // Increase the step or return to 0 if it's greater than the length of items
  if (currentItem < itemLength - 1) {
    currentItem ++
  } else {
    currentItem = 0
  }
  // Set the scroll based on above changes
  scroll = currentItem * height

}, 3000);

