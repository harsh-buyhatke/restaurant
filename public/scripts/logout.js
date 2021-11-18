function logout() {
    fetch('/logout', {
        method: 'POST',
    }).then(x => x.json()).then(response => {
        window.location = '/'
    });
}