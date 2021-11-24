function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log(username);
    console.log(password);
    let data = { username, password };
    fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(x => x.json())
        .then(res => {
            // console.log('what',response);
            if (res.status === -1) {
                window.alert('Please Enter password Correctly')
            }
            else if (res.status === -2) {
                window.alert('Please register first')
            }
            // console.log("huh ? " , response.data[0]["yes"]);
            if (res.data[0]["yes"] === 1) {
                window.location = '/profile'
            } else if (res.data[0]["yes"] === 2) {
                window.location = '/admin'
            }
        })
}