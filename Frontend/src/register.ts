let full_name = document.getElementById('full_name') as HTMLInputElement
let email = document.getElementById('email') as HTMLInputElement

let password = document.getElementById('password') as HTMLInputElement


let register_form = document.getElementById('reg-form') as HTMLFormElement

register_form.addEventListener('submit', (event)=>{
    event.preventDefault()

    let name = full_name.value
    let user_email = email.value
    let pass = password.value
    

    let state = name.trim() != '' && user_email.trim() != ''  && pass.trim() != ''

    if(state){
        if(pass){

            const promise = new Promise <{error:string, message:string}> ((resolve, reject)=>{
                fetch('http://localhost:9000/user/register', {//change our listen port
                    headers:{
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({
                        "name": name,
                        "email": user_email,
                        "password": pass
                        
                    })
                }).then((res=>res.json())).then(data=>{
                    console.log(data);
                    gotoLogin()
                    resolve(data) 
                }).catch(error=>{
                    console.log(error);
                })
            })

            function gotoLogin(){
                location.href = 'login.html'
            }
         
        }
        
        // else{

        //     console.log('Password mismatch');
        // }
    }
})