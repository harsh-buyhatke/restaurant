fetch('/api/availableaddress', {
    method: 'GET',
}).then(response => response.json()).then(
    response => {
        let dropDown = document.getElementById("address");
        let obj = Object.assign({}, response);
        let sz = Object.keys(obj).length;
        //console.log(obj.data);
        for (let i = 0; i < sz; i++)
        {
            let newoption = document.createElement('option');
            
            newoption.innerText = obj.data[i].address;
           // console.log(newoption);
            dropDown.append(newoption);
        }
});