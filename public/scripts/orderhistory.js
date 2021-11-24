console.log("js file called");
fetch('/api/orderHistory', {
    method: 'POST',
})
.then(response => response.json())
    .then(orderhistory => {
       // console.log(orderhistory[0]);
    // console.log(orderhistory[0]);
    let sz = Object.keys(orderhistory.data[0]).length;
    let place = document.getElementById('orderhistory');
    // let p = document.createElement('pre');
    // p.append(`NAME           COST`);
    // place.append(p);
    // place.append(document.createElement("br"));
    for(let i = 0 ; i < sz ; ++i){
        const newDiv = document.createElement("div");
        newDiv.append(`${orderhistory.data[0][i].address} : ${orderhistory.data[0][i].item} :  ${orderhistory.data[0][i].quantity} `)
        const input = document.createElement("input")
        input.setAttribute("type" , "number");
        input.setAttribute("name" , `${orderhistory.data[0][i].item}`);
        
        place.append(newDiv);
        place.append(document.createElement("br"));
    }
});

