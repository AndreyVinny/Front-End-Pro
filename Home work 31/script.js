let arr = [];

const getChildren = file => {
    let data = new XMLHttpRequest()
    data.open('GET', file)
    data.send()

    data.addEventListener(`readystatechange`, ()=>{
        if(data.readyState === 4 && data.status >= 200 && data.status <=400){
            let children = JSON.parse(data.responseText);
            for(let key in children){
                arr.push(children[key]);
            }
            console.log(arr.flat());
        } 
    })
}


getChildren(`data.json`)
getChildren(`data2.json`)




