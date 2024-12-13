const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function isValidEmail(email) {
    const a = email.value;
    if (a === "") {
        error(email,"Email address is required.");
    }else{
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 

    if(regex.test(a)){
        success(email);
    }else{
        error(email, 'email is not valid')
    }
    }
}

const userNameLength = (username) => {
    const user = username.value;
    if(user.length < 4){
        error(username, 'Username must be at least 5 characters');
    }else{
        success(username);
    }
}

const passwordReq = (password) => {
    const pass = password.value;
    let reUp = /[A-Z]/;
    let reNum = /[0-9]/;
    let reSpec =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
    
    if(pass.length < 6){
        error(password,'Password must be at least 6 characters');
    }else{
        if(reUp.test(pass)&reSpec.test(pass)&reNum.test(pass)){
            success(password);
        }else{
            error(password, 'Password must contain at least one Uppercase letter, special character and number');
        } 
    }
    
}

const passwordCheck = (password, repassword) => {
    const pass = password.value;
    const repass = repassword.value;
    if(pass == repass){
        success(repassword);
    }else{
        error(repassword, 'Passwords must be same');
    }
}

function error(input, message){
    input.className = 'form-control error'
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'error-text';
}

function success(input){
    input.className = 'form-control accepted'
    const div = input.nextElementSibling;
    div.innerText= '';
}

function checkRequired(inputs){
    inputs.forEach(input => {
        if(input.value == ''){
        error(input,`${input.id} is required`);
    }else{
        success(input);
    }
    });
    
}



form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username,email,password,repassword]);
    isValidEmail(email);
    passwordCheck(password,repassword);
    userNameLength(username);
    passwordReq(password);
});