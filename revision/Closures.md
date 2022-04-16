## Closure Problems

- Closure is a function along with its lexical environment i.e. with references to variables defined outisde of that function.
- Closure maintains the variable references, which allows function to access variablles outside of their scope.
```js
// example

let word = "this is not passed to outer";
const outer = () => {
    console.log( word );
}

outer(); // "this is not passed to outer"
word = "this is changed!"
outer(); // "this is changed!"
// thus we can say closure maintain reference and not value
```


1. Create a function called toggler using closures
function toggler(){ ... }
const toggle = toggler(1,2,3)
toggle() // 1 
toggle() // 2 
toggle() // 3 
// the next time you toggle it the output is 1 
toggle() // 1 
toggle() // 2
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

2. What are IIFE?
```
IIFE is an acronym for Immediately Invoked Functional Expressions.
IIFEs are used when we have to execute a function that won't be used again.

IIFEs are mainly used for
1. Avoid polluting the global namespace
2. Execute an async function in browsers that don't have support for top level await
3. to implement The module pattern
```

3. What is currying?
```
Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician Haskell Curry. By applying currying, a n-ary function turns it into a unary function.
```

4. Write a program to throttle using closures

```js
const throttler = (throttledFunction, throttlingTime) => {
  let prevTime = 0;
  return (...args) => {
    if ( Date.now() - prevTime > throttlingTime ){
      prevTime = Date.now();
      throttledFunction(...args);
    }
  }
}

document.addEventListener("element", throttler( callback, 1000 ));
```

6. Explain some areas where you have seen currying being implemented in React / other libraries?
```
Currying can useful when we want to use same kind of function multiple time with only few changes so instead of giving same params multiple times we might want to create a function that has that params fixed and can be executed with the changing params

In react when we need to use identification for a function i.e. that which even called then we can use currying.
When we have a list of items and we want to detect which item called function then we can use currying.
```
```js
const List = ({items}) => {
    const handleClick = (item) => () => {
        console.log(item);
    };
  
    return (
        <ul>
            {items.map((item) => (
                <li key={item}>
                <span>{item}</span>
                <button onClick={handleClick(item)}>
                    Log
                </button>
                </li>
            ))}
        </ul>
    );
};
```