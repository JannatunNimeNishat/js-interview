//problem statement: a number is given print 0 to given number, give a delay after printing a number. the delay amount will be the number which is currently printing. 

//output: 3 
//        0 1 2 3 


function delay(i){

    return new Promise((resolve)=>{
        setTimeout(() => {
           resolve(i)
        }, i * 1000)
    })
}


async function timer(n) {
    console.log('start timer');
    //if we declare loop variable with var keyword it will gets the function scope so it will gets the last most iteration value in this care last loop variable value would be 4. So the output will be 4,4,4,4.  And if we use let keyword to declare the loop variable it will get block scope and every time this setTimeout goes to the browser api it will contain the current value of i in each iteration. So the output will be 0,1,2,3

    for (let i = 0; i <= n; i++) {

        // there is a problem with sequence 'end timer' is printing before this settime out we can solve this by a promise and async await 

        const result = await delay(i)
        console.log(result);


       /*  setTimeout(() => {
            console.log(i);
        }, i * 1000) */


    }

    console.log('end timer');

}

timer(3)

