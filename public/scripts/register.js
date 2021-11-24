function register() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log(username);
    console.log(password);
    let data = { username, password };
    fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(res => {
            if (res.status === -1) {
                window.alert('Please Enter Email Correctly')
            }
            else if (res.status === -2) {
                window.alert('Password should have upper case,lower case , special and a digit')
            } else if (res.status === -3) {
                window.alert('User with this email already exists')
            }
            else {
                window.location = '/login';
            }
        });
}