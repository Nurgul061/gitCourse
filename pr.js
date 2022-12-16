function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue< 160){
        navbar.classList.remove('bgColor');
    }else {
        navbar.classList.add('bgColor');
    }
}

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
  