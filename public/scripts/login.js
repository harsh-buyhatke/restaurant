function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log(username);
    console.log(password);
    let data = {username , password};
    fetch('/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(x => x.json())
    .then(response => {
        console.log('what',response);
        console.log("huh ? " , response.data[0]["yes"]);
        if(response.data[0]["yes"] === 1){
            window.location = '/profile'
        }else if(response.data[0]["yes"] === 2){
            window.location = '/admin'
        }
    })
}