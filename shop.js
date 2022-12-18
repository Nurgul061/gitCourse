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

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}