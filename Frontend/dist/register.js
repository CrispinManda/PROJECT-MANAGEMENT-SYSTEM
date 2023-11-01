"use strict";
let full_name = document.getElementById('full_name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let register_form = document.getElementById('reg-form');
register_form.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = full_name.value;
    let user_email = email.value;
    let pass = password.value;
    let state = name.trim() != '' && user_email.trim() != '' && pass.trim() != '';
    if (state) {
        if (pass) {
            const promise = new Promise((resolve, reject) => {
                fetch('http://localhost:9000/user/register', {
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({
                        "name": name,
                        "email": user_email,
                        "password": pass
                    })
                }).then((res => res.json())).then(data => {
                    console.log(data);
                    gotoLogin();
                    resolve(data);
                }).catch(error => {
                    console.log(error);
                });
            });
            function gotoLogin() {
                location.href = 'login.html';
            }
        }
        // else{
        //     console.log('Password mismatch');
        // }
    }
});
