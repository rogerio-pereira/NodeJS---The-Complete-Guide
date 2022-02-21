//Simple promise call
// const fetchData = callback => {
//     setTimeout(() => {
//         callback('Done!');
//     }, 1500)
// }

// setTimeout(() => {
//     console.log('timer is done')
//     fetchData(text => {
//         console.log(text);
//     })
// }, 2000)

//Those functions are asynchronous, it will run at the same time, in console, will show hello, hi and timer is done, even if the timeout is 1ms
console.log('Hello')
console.log('Hi')


//Will show hello, hi
//2 seconds later will show timer is done
//1.5 seconds will show done

//This code is what happens behind de scenes
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500)
    });

    return promise;
    //Remeber js is asynchornous by default...
    //It will create promise,
    //return the promise
    //run the promise
    //run timeout
    //resolve done
}

setTimeout(() => {
    console.log('timer is done')
    fetchData()                     //1
        .then(text => {
            console.log(text);
            return fetchData();     //2
        })
        .then(text => {
            console.log(text);
        });

    //In this case will call first fetchData... it will return a promise
    //Run promise fetchdata(1)
    //Wait 1.5 seconds
    //Resolve Done
    //Execute first then
    //Return another promise 
    //Run promise fetchdata(2)
    //Wait 1.5 seconds
    //Resolve Done
    //Execute second then

}, 2000)