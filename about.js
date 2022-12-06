const anchors = document.querySelectorAll('a[href*="#down1"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

function change(ex){
      document.getElementById("label1").innerHTML="Detailed <br/><em>Craftsmanship</em>";
      document.getElementById("label").innerHTML="Because of our expertise and passionate participation throughout the entire process we are able to find the perfect balance between the contemporary aesthetic and the belonged quality.";
      document.getElementById("ch2").style.color="lightgrey";
      document.getElementById("ch3").style.color="lightgrey";
      document.getElementById("ch1").style.color="black";
}
function change2(ex){
  document.getElementById("label").innerHTML="We commit ourselves to move fast in a constantly changing fashion landscape and to incorporate the most relevant trends into our own signature mix of classic and modern elements."
  document.getElementById("label1").innerHTML="Design<br/><em>Driven</em>";
  document.getElementById("ch1").style.color="lightgrey";
  document.getElementById("ch3").style.color="lightgrey";
  document.getElementById("ch2").style.color="black";
}
function change3(ex){
  document.getElementById("label").innerHTML="Since 2022 we aim at creating luxurious and contemporary fashion goods for wearable prices, because we believe that every woman should be able to indulge herself in luxury."
  document.getElementById("label1").innerHTML="Affordable<br/><em>Luxury</em>";
  document.getElementById("ch1").style.color="lightgrey";
  document.getElementById("ch2").style.color="lightgrey";
  document.getElementById("ch3").style.color="black";
}
