/*
In javaScript functions is called firstClass function.
We can pass a function to another function as argument and also can return a function from another function
*/

//1.passing a function to another function as its argument
function callMyName(name, callback){
    let myage = 21;
    callback(myage)
    console.log(`It is interesting ? yes it is Mr.`, name);

}

function hello(age){
    console.log(`I am passed through argument and my age is: `, age);
}

// callMyName('Md. Jannatun Nime', hello)


//2. return a function from a function
function welcomeMsg(name){
    console.log('welcome Mr. ',name);
    return function options(menu){
        console.log(`Do you like `, menu , `Mr. `, name);
    }
}

welcomeMsg('Md. Jannatun Nime') ('Coffee')


