// input: [ 1, [ 2, 3 ], [ 3 ], [ [ [ 5]],  6]  ]
// output => [ 1, 2, 3, 3, 5, 6 ]




// console.log( customFlat([ 1, [ 2, 3 ], [ 3 ], [ [ [ 5]],  6]  ]) );

// toggler
// toggler(n, m)

// function toggler(){
//     let index = 0;
//     let arr = arguments;
//     return () => {
//         if ( arr.length === index ){
//             index = 0;
//             console.log(arr[index++]);
//         } else {
//             console.log(arr[index++]);
//         }
//     }
// }

// const button = toggler(1, 2, 3);

// button();
// button();
// button();
// button();

// implement memoization
// costly function => fibonaci using recursion

// const fib = (n) => {
//     if ( n <= 2 ) return 1;
//     return fib(n-1) + fib(n-2);
// }
// let oldTime = new Date();
// fib(42)
// console.log( (new Date() - oldTime)/1000 , "secs" ) // 3sec
// fib(42)
// console.log( (new Date() - oldTime)/1000 , "secs" ) // 6sec

// const memoized = (cb) => {
//     let memoization = new Map(); // or we can use {}
//     return (...arguments) => {
//         let key = JSON.stringify(arguments);
//         if ( !memoization.has(key) ) memoization.set(key, cb(...arguments));
//         return memoization.get(key);
//     }
// };

// const memoizedFib = memoized(fib);

// console.log( "Memoization" )

// oldTime = new Date();

// memoizedFib(42); // 3sec
// console.log( (new Date() - oldTime)/1000 , "secs" )

// memoizedFib(42); // 3sec
// console.log( (new Date() - oldTime)/1000 , "secs" )


// Implement Promise All
// const customPromiseAll = async (promises) => {
//     try {
//         const res = [];
//         for ( const promise of promises ){
//             const result = await promise;
//             res.push(result);
//         }
//         return res;
//     } catch ( err ) {
//         throw err;
//     }
// }

// const customPromiseAll = function (promises) {
//     if ( promises.length === 0 ) return Promise.resolve([]);
//     const [first, ...rest] = promises;
//     return Promise.resolve(first).then( res => {
//         return customPromiseAll( rest ).then( restResult => {
//             return [res, ...restResult];
//         });
//     });
// }

// const makePromise = async ( n ) => {
//     if ( n !== 9 ) return n;
//     throw Error("error")
// };
// async function main() {

//     const real = await Promise.all([makePromise(1), makePromise(8), makePromise(10), makePromise(5)])
//     const fake = await customPromiseAll([makePromise(1), makePromise(8), makePromise(10), makePromise(5)])
    
//     console.log(real);
//     console.log(fake);
// }

// main();

// const sleep = (time) => {
//     return new Promise((resolve, reject) => {
//         if ( time < 0 ) reject("Invalid time!");
//         setTimeout( () => resolve(time), time);
//     })
// };


// sleep(-500).then(res => {
//     console.log(`slept for ${res} milli seconds`)
// }).then(err => {
//     console.log(err)
// })



// let word = "this is not passed to outer";
// const outer = () => {
//     console.log( word );
// }

// outer();
// word = "this is changed!"
// outer();