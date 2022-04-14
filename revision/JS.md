1. What is hoisting?
```
Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution.

function => completely hosited with their function definition
var => hoisted and intialised to undefined
let/const => they are also hosited but not intialisedtemporal dead zone, Throws ReferenceError exception as the variable value is uninitialized
class => Classes defined using a class declaration are hoisted, which means that JavaScript has a reference to the class. However the class is not initialized by default, so any code that uses it before the line in which it is initialized is executed will throw a ReferenceError.
```

2. What is scoping?
```
The current context of execution. The context in which values and expressions are "visible" or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

imp => js follows lexical scoping.
```

3. How are var, let const different?
```
Main difference between var and let/const
1. Var is hoisted and intialised to undefined while let/const are hosited but not intialised.
2. Var is functionally scoped while let/const has block scope.
3. Var can be redeclared inside the same scope while let/const cann't be.
4. Var variables can be reassigned while let can be reassigned but const can not be reassigned.
```

4. What are the two main differences in arrow functions?
```
1. Arrow function don't have this of their own they point to the nearest parent object.
2. Syntex of arrow function is as follows

const a = (arg) => {
  return arg;
} 
3. Arrow function have implicit return
4. Arrow function cannot be used as constructor because of "this" not pointing to the function rather points to the context in which function was defined.
5. Arrow function don't have arguments object inside it. 
```

5. Does Call apply bind work for arrow functions?
```
In case of arrow functions call,apply and bind work little differently as the "this" is not pointing to the function but to its lexical environment or parent context.

Since arrow functions do not have their own this, the methods call, bind and apply can only pass in parameters. thisArg is ignored.
```

6. What does call apply bind do?
```
Call, bind and apply are used to change the execution context of a function.
call => We can execute a function with different execution context immediately with arguments.
apply/bind => We can create a new function with different execution context with
apply = array of arguments
bind = arguments as we pass in function
```

7. What are closures?
```
A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains

i. Own scope where variables defined between its curly brackets
ii. Outer function’s variables
iii. Global variables
```

8. Write a program to debounce a search bar?
```js
const debouncer = (debouncingTime, debouncedFunction) => {
  let timerId;
  return (...args) => {
    timerId && clearTimeout(timerId);
    timerId = setTimeout(() => {
      timerId = null;
      debouncedFunction(...args);
    })
  }
}
```

9. Write a program to throttle a search bar?
```js
const throttler = (throttlingTime, throttledFunction) => {
  let prevTime = 0;
  return (...args) => {
    if ( Date.now() - prevTime > throttlingTime ){
      prevTime = Date.now();
      throttledFunction(...args);
    }
  }
}
```

10. create a custom method for an array called myMap, use prototype chain to achieve this
```js
  const arr = [1,2,3]
  arr.myMap(a=>a*5)
  // [ 5, 10, 15 ]
  it should work in this manner

  myArray.prototype.myMap = function(callback){
    let res = [];
    for ( const index in this ){
      if ( this.hasOwnProperty( index ) ){
        let returnElem = callback( this[index], Number[index], this );
        result.push( returnElem ); 
      }
    }
    return result;
  }

```

11. What is event bubbling?
```
Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element.
```

12. What is event loop?
```
JavaScript is a synchronous, non-blocking, single-threaded language but the web/internet is very asynchronous in nature i.e. we are not aware when user will click certain button or when will the data that we request will arrive.At the same time there can be task that need to be called after certain time like a pop up saying 'subscribe to newsletter' but we can not simply block all code and wait till we have shown the pop up.

Now to manage all above features and more javascript has an internal mechanism known as event loop which executes command one by one and move aside waiting or promises using web apis.

// In Browser
The event loop in JS consists of 4 main parts the synchronous code i.e. whatever program we have written get executes one by one and if we encounter any promise or timer functions provided web browsers apis then they will be moved aside or given to the browser and they will either be added to microtask/priority queue or task queue depending on type of task. After the call stack becomes empty i.e. all synchronus code is completed then we check for any event or task to be performed from the task queue which consists of promises or  priority task after they are also executed then the task queue or event/callbacks are executed and this cycle keeps repeating.

Eventloop basically keeps looking if there is something to executed in the order
1. Main code/program
2. Promises/Events i.e. Priority or Micro task queue
3. Callbacks from timers and other task


// In Node
Node has different implementation as aside of all the frontend JS related functionality, we also have I/O operations, file reading, etc.

Node's event loop constitues of 6 different phases and each of these phase will have their own queue.

the 5 phase of node's event loop are as follows:
1. Timers => callbacks from setTimeout and setInterval
2. Callback => executes I/O callback that are deffered to the next loop iteration ( e.g. TCP socket receives ECONNREFUSED then in the next cycle that error 
3. idle/prepare => used internally
4. poll => retrieve new I/O events
5. check => executes setImmediate callbacks
6. close callbacks => close callbacks

Each loop in node is also known as process.tick, the time duration of this cycle keeps changing depending the load/processes being executed by node.
```

13. Explain promises to a 5 year old, with simple examples
```
A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.

// It was introduced in ES6 to avoid callback and the problem of callback hell.

for 5 year old => What I like to relate promise is with how parent tell their children that they will buy something for them when they go to buy grocery/mall. The state where child is waiting is like pending state which can either result into parent buying something i.e. resolve or parent forgot about it and did not buy anything i.e. reject.
```

14. Write a function called sleep that will return a promise, if you do not provide a number to the function,    then it will return an error and goto the catch block
sleep(500).then(res=> {
 console.log('slept for ${res} milli seconds})
})
.then(errr=>{
  console.log(err)
})
```js
const sleep = (time) => {
    return new Promise((resolve, reject) => {
        if ( time < 0 ) reject("Invalid time!");
        setTimeout( () => resolve(time), time);
    })
};
```

15. what does async await mean?
```
async await is more sychrnonous way of writing asynchronous code, it was introduced in ES2017 and provides syntactical sugar over promises.

async keyword converts a function into promised returning function and await inside async esentially works as .then method.

await is used to wait for a promise.

When writing async functions we can either use .then and .catch after the function execution to catch errors or we can use try catch block inside the function at the time of writing that function.
```

16. What does the this keyword mean?
```
this is a special keyword which refers to the currrent context or environment, except in case of arrow fuctions where they refer to the lexcial parent of arrow function.

In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, and ES2015 introduced arrow functions which don't provide their own this binding (it retains the this value of the enclosing lexical context).

```

17. What are classes? what are getters and setters?
```
Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class

A class expression is another way to define a class. Class expressions can be named or unnamed. The name given to a named class expression is local to the class's body. However, it can be accessed via the name property.
```

18. How do you declare private and static variables in classes
```
Private

Class fields are public by default, but private class members can be created by using a hash # prefix. The privacy encapsulation of these class features is enforced by JavaScript itself.

Static

The static keyword defines a static method or property for a class, or a class static initialization block (see the link for more information about this usage). Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself.

Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

Getter

The get syntax binds an object property to a function that will be called when that property is looked up.

Sometimes it is desirable to allow access to a property that returns a dynamically computed value, or you may want to reflect the status of an internal variable without requiring the use of explicit method calls. In JavaScript, this can be accomplished with the use of a getter.

It is not possible to simultaneously have a getter bound to a property and have that property actually hold a value, although it is possible to use a getter and a setter in conjunction to create a type of pseudo-property.

It must have exaclty 0 parameters.


Setter
The set syntax binds an object property to a function to be called when there is an attempt to set that property.

In JavaScript, a setter can be used to execute a function whenever a specified property is attempted to be changed. Setters are most often used in conjunction with getters to create a type of pseudo-property. It is not possible to simultaneously have a setter on a property that holds an actual value.

It must have exactly one parameter.
```

19. Create a Calculator class, it should be able to add, reduce multiply and divide. it should have a value getter, and that should return final output. keep the history of changes made as well, and keep that private, and a user should be able to see previous changes made to the value
```js
class Calculator {
    #curr;
    #history;
    constructor(){
        this.#curr = 0;
        this.#history = [];
    }

    addHistory(curr, type, n, res){
        let action;
        switch ( type ) {
            case "+":{
                action = "added to";
                break;
            }
            case "*":{
                action = "muliplied by";
                break;
            }
            case "-":{
                action = "subtracted from";
                break;
            }
            case "/":{
                action = "divided by";
                break;
            }
            default: {
                action = "divided by";
            }
        }
        if ( type === "/" ){
            this.#history.push(`${curr} is ${action} ${n} resulting to ${res}`);
        } else {
            this.#history.push(`${n} is ${action} ${curr} resulting to ${res}`);
        }

    }

    add(n) {
        let curr = this.#curr;
        this.#curr += n;
        this.addHistory(curr, "+", n, this.#curr);
    }

    subtract(n){
        let curr = this.#curr;
        this.#curr -= n;
        this.addHistory(curr, "-", n, this.#curr);
    }
    
    muliply(n){
        let curr = this.#curr;
        this.#curr *= n;
        this.addHistory(curr, "*", n, this.#curr);
    }

    divide(n){
        let curr = this.#curr;
        this.#curr /= n;
        this.addHistory(curr, "/", n, this.#curr);
    }

    get currentValue(){
        return this.#curr;
    }

    printHistory(){
        for ( const item of this.#history ){
            console.log(item);
        }
    }
}

const calc = new Calculator();

calc.add(5);
calc.add(7);
calc.subtract(3);
calc.muliply(2);
calc.divide(3);
calc.add(5);
calc.printHistory();

// 5 is added to 0 resulting to 5
// 7 is added to 5 resulting to 12
// 3 is subtracted from 12 resulting to 9
// 2 is muliplied by 9 resulting to 18
// 18 is divided by 3 resulting to 6
// 5 is added to 6 resulting to 11
```

20. What is currying?
```js
// Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician Haskell Curry. By applying currying, a n-ary function turns it into a unary function.

Infinite currying
const sum = (a) => {
  return (b) => {
    if ( b ) {
      return sum( b + a );
    }
    return a;
  }
}

```

21. Write a program to flatten an array
// input: [ 1, [ 2, 3 ], [ 3 ], [ [ [ 5]],  6]  ]
// output => [ 1, 2, 3, 3, 5, 6 ]
```js
const customFlat = (input) => {
    const res = [];
    for ( const val of input ){
        if ( typeof (val) === "object" ){
            res.push(...customFlat(val));
        } else {
            res.push(val);
        }
    }
    return res;
}
```

22. Implement Memoization function that memozies value of costly function
```js
const memoized = (cb) => {
    let memoization = new Map(); // or we can use {}
    return (...arguments) => {
        let key = JSON.stringify(arguments);
        if ( !memoization.has(key) ) memoization.set(key, cb(...arguments));
        return memoization.get(key);
    }
};
```

23. Implement Toggler function
```js
function toggler(){
    let index = 0;
    let arr = arguments;
    return () => {
        if ( arr.length === index ){
            index = 0;
            console.log(arr[index++]);
        } else {
            console.log(arr[index++]);
        }
    }
}

```

24. Implement promise.all with async await and promises
```js
// with async await
const customPromiseAll = async (promises) => {
    try {
        const res = [];
        for ( const promise of promises ){
            const result = await promise;
            res.push(result);
        }
        return res;
    } catch ( err ) {
        throw err;
    }
}

// with promise
const customPromiseAll = function (promises) {
    if ( promises.length === 0 ) return Promise.resolve([]);
    const [first, ...rest] = promises;
    return Promise.resolve(first).then( res => {
        return customPromiseAll( rest ).then( restResult => {
            return [res, ...restResult];
        });
    });
}
```