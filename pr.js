function changeBg(){
  var navbar = document.getElementById('navbar');
  var scrollvalue = window.scrollY;
  if(scrollvalue<335){
    navbar.classList.remove('bgColor');
  }else{
    navbar.classList.add('bgColor');
  }
}
window.addEventListener('scroll',changeBg);

(function () {
    var square = document.querySelector('.suret33');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('suret33-animation');
        }
      });
    });
    
  
    observer.observe(square);
  })();
  
function kelesi(){
    window.location.href='pr.html';
}
const text = document.querySelector(".domalaq p");
            text.innerHTML = text.innerText.split("").map((letter, i) =>
            `<span style="transform:rotate(${i * 8.2}deg")>${letter}</span>`
            )
            .join("");
  