const signUpBtnLink = document.querySelector(".signUpBtn-link");
const signInBtnLink = document.querySelector(".signInBtn-link");
const wrapper = document.querySelector(".wrapper");

signUpBtnLink.addEventListener('click', () =>{
    wrapper.classList.toggle("active");
    document.querySelector('.word').innerHTML = "Registration";
});


signInBtnLink.addEventListener('click', () =>{
    wrapper.classList.toggle("active");
    document.querySelector('.word').innerHTML = "Login";
});
console.log('Hello');



function registration(form){
    console.log(form['email'].value);
    let name = form['name'].value;
    let email = form['email'].value;
    let pass = form['pass'].value;
    $.ajax({
        url: 'register.php',
        type: 'POST',
        data: { name,email,pass},
        success: (result) => {
            console.log(result);
            window.location.replace("shop.html");
        },
        error: () => {
            console.log('error');
        }
    });
}

function login(form){
    let email = form['email'].value;
    let pass = form['pass'].value;
    $.ajax({
        url: 'login.php',
        type: 'POST',
        data: { email,pass},
        success: (result) => {
            console.log(result.replace(/\s/g, ''));
            if(result.replace(/\s/g, '')=='true'){
                window.location.replace("shop.html");
            }
            else{
                window.alert('INVALID PASSWORD OR EMAIL');
            }

        },
        error: () => {
            console.log('error');
        }
    });
}