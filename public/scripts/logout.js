function logout() {
    fetch('/api/logout', {
        method: 'POST',
    }).then(x => x.json()).then(response => {
        window.location = '/'
    });
}