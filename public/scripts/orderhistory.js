console.log("js file called");
fetch('/orderHistory', {
    method: 'POST',
})
.then(response => response.json())
    .then(orderhistory => {
       // console.log(orderhistory[0]);
    // console.log(orderhistory[0]);
    let sz = Object.keys(orderhistory).length;
    let place = document.getElementById('orderhistory');
    // let p = document.createElement('pre');
    // p.append(`NAME           COST`);
    // place.append(p);
    // place.append(document.createElement("br"));
    for(let i = 0 ; i < sz ; ++i){
        const newDiv = document.createElement("div");
        newDiv.append(`${orderhistory[i].address} : ${orderhistory[i].item} :  ${orderhistory[i].quantity} `)
        const input = document.createElement("input")
        input.setAttribute("type" , "number");
        input.setAttribute("name" , `${orderhistory[i].item}`);
        
        place.append(newDiv);
        place.append(document.createElement("br"));
    }
});

