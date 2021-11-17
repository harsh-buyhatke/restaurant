fetch('/pendingOrders', {
    method: 'POST',
})
.then(response => response.json())
.then(pendingorders => {
    console.log(pendingorders);
    let sz = Object.keys(pendingorders).length;
    console.log(pendingorders);
    let place = document.getElementById('pendingorders');
    // let p = document.createElement('pre');
    // p.append(`NAME           COST`);
    // place.append(p);
    // place.append(document.createElement("br"));
    for(let i = 0 ; i < sz ; ++i){
        const newDiv = document.createElement("div");
        newDiv.append(`${pendingorders[i].address} :  ${pendingorders[i].item}  : ${pendingorders[i].quantity}`)
        const input = document.createElement("input")
        input.setAttribute("value" , 0);
        input.setAttribute("type" , "number");
        input.setAttribute("orderid" , pendingorders[i].orderid);
        input.setAttribute("name" , `${pendingorders[i].item}`);
        newDiv.append(input);
        place.append(newDiv);
        place.append(document.createElement("br"));
    }
});

function confirmOrder(){
    let orders = document.getElementsByTagName('input');
    let sz = orders.length;
    console.log(orders[0]);
    let obj = {};
    for(let i = 0 ; i < sz ; ++i){
        let temp = {};
        temp.status = orders[i].value;
        temp.orderid = orders[i].getAttribute("orderid");
        obj[i] = temp;
    }
    // console.log(obj);
    // console.log(orders[1]);
    // console.log(orders[2]);
    // console.log(orders[3]);
    fetch('/confirmOrder', {
        method: 'POST',

        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => {
        console.log(response);
    })
}