// Q. Explain what a callback function is and provide a simple example? 

function orderPizza(type, name, callback){
    console.log(`pizza ${type} ${name} is ordered`);

    setTimeout(()=>{
        const message = `pizza ${type} ${name} is ready`;
        callback(message)
    },3000)

}


const status = (message) =>{
    console.log(message);
}

orderPizza('veg','mozzerila', status )

