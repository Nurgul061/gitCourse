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
var itemLength = $(".list li").length
var currentItem = 0
var scroll = height

setInterval(function() {
 $('.list').animate({
    scrollTop: scroll
  }, 500);
  if (currentItem < itemLength - 1) {
    currentItem ++
  } else {
    currentItem = 0
  }
  scroll = currentItem * height

}, 3000);

