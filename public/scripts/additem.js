
const submit = () => {
    let name = document.getElementById("1").value;
    let cost = document.getElementById("2").value;

    let obj = { name, cost };
    fetch('/api/additem', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(() => {
        window.alert('Item added Successfully');
        location.reload();
    });

}

