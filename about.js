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
      document.getElementById("label").innerHTML="<em>Because of our expertise and passionate participation throughout the entire process we are able to find the perfect balance between the contemporary aesthetic and the belonged quality.</em>";
      document.getElementById("ch2").style.color="lightgrey";
      document.getElementById("ch3").style.color="lightgrey";
      document.getElementById("ch1").style.color="black";
}
function change2(ex){
  document.getElementById("label").innerHTML="<em>We commit ourselves to move fast in a constantly changing fashion landscape and to incorporate the most relevant trends into our own signature mix of classic and modern elements.</em>"
  document.getElementById("label1").innerHTML="Design<br/><em>Driven</em>";
  document.getElementById("ch1").style.color="lightgrey";
  document.getElementById("ch3").style.color="lightgrey";
  document.getElementById("ch2").style.color="black";
}
function change3(ex){
  document.getElementById("label").innerHTML="<em>Since 2022 we aim at creating luxurious and contemporary fashion goods for wearable prices, because we believe that every woman should be able to indulge herself in luxury.</em>"
  document.getElementById("label1").innerHTML="Affordable<br/><em>Luxury</em>";
  document.getElementById("ch1").style.color="lightgrey";
  document.getElementById("ch2").style.color="lightgrey";
  document.getElementById("ch3").style.color="black";
}

pages = 5;
function listNext(page) {
    if (page == 1)
     prev_page = pages;
    else
    prev_page = page-1;
    if (page == pages)
   next_page = 1;
  else
  next_page = page+1;
    prev_id = "feed_"+prev_page;
    prev_elem = document.getElementById(prev_id);
    prev_elem.style.display = "none";
    id = "feed_"+page;
    elem = document.getElementById(id);
    elem.style.display = "block";
    document.getElementById('button').innerHTML = `<input type="button" onclick="listNext(${next_page})" value=">>" />`;
}
(function () {
  var square = document.querySelector('.img3');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('img3-animation');
      }
    });
  });

  observer.observe(square);
})();