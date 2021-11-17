
const submit=() => {
    let name = document.getElementById("1").value;
    let cost = document.getElementById("2").value;

    let obj = { name, cost };
    fetch('/additem', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(response => console.log(response));

}

