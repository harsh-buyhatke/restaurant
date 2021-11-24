fetch('/api/menu', {
    method: 'GET',
})
    .then(response => response.json())
    .then(menu => {
        // console.log(menu[0]);
        let sz = Object.keys(menu.data[0]).length;
        let place = document.getElementById('menu');
        // let p = document.createElement('pre');
        // p.append(`NAME           COST`);
        // place.append(p);
        // place.append(document.createElement("br"));
        for (let i = 0; i < sz; ++i) {
            const newDiv = document.createElement("div");
            newDiv.append(`${menu.data[0][i].name} :  ${menu.data[0][i].cost} `)
            const input = document.createElement("input")
            input.setAttribute("type", "number");
            input.setAttribute("name", `${menu.data[0][i].name}`);
            newDiv.append(input);
            place.append(newDiv);
            place.append(document.createElement("br"));
        }
    });


function placeOrder() {
    let orders = document.getElementsByTagName('input');
    let sz = orders.length;
    let obj = {};
    for (let i = 0; i < sz; ++i) {
        obj[orders[i].name] = orders[i].value;
    }
    console.log(obj);
    fetch('/api/placeOrder', {
        method: 'POST',

        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(x => x.json())
        .then(res => {
            if (res.status == -1) {
                window.alert('Address cannot be empty');
            } else if (res.stats == -2) {
                window.alert('Login first');
            } else {
                location.reload();
            }
        })
}