// this code was tested in web browsers, i don't use a node server for this.

// async/await is a way to handle promises in JS code.
// Promises are a way to handle large quantities or heavy data without blocking the main thread of the code, allowing the code to have a certain level of asynchrony.
// Example without async/await


function simpleCode(){

    // in this example we can se the manssage in if strat afeter the loop this is valid for the rest of code

    console.log('the process started');

    for (let i = 0; i <= 100000000; i++){
        if (i >= 100000000){
            console.log('the process is finished');
            return i        
        }
    }

}

async function asyncProcess(): Promise<string> {
    console.log('the process started');

    let i = 0;
    while (i <= 100000) {
        if (i % 100000 === 0) {
            await new Promise<void>(resolve => setTimeout(resolve, 0));
        }
        i++;
    }

    console.log('the process is finished');
    return 'Process finished';
}

async function asyncExample() {

    // in this exemple the asyncProcess(); send your response afeter the line 
    // we can confirme the process is asynchronous 

    console.log('asyncExample started');

    asyncProcess();

    console.log('line 1');
    console.log('line 2');
    console.log('line 3');
    console.log('line 4');
    console.log('line 5');
    console.log('line 6');

    console.log('asyncExample finished');
}