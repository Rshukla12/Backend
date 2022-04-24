## Problem 
1. Give an example where call apply bind is. required?
- When we want to change execution context we use call, bind and apply for example
```js
let person = {
    name: 'James',
    getName: function() {
        console.log(this.name);
    }
};
setTimeout(person.getName, 1000); // udefined

let func = person.getName.bind(person);
setTimeout(func, 1000); // james
```

2. What is the difference between readFile and readFileSync?readFile is an asynchronous operation so it 
- readFile is a non blocking and asynchronous operation i.e. it reads file in small sections or chunks while readFileSync is blocking and synchronous operation i.e. it completely read file and then give output as a whole.

3. What does process in node.js mean?
- The process object (which is an instance of the EventEmitter) is a global variable that provides information on the currently running Node.js process.

4. Explain what node.js is?
- Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl in 2009 and its latest version is v0.10.36. The definition of Node.js as supplied by its official documentation is as follows −

- Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

- Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.

- Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.

- Features:- Asynchronous and Event Driven, Very Fast, Single Threaded but Highly Scalable, No Buffering

5. What is the difference of JS from browser to JS on node.js
- In the browser, most of the time what you are doing is interacting with the DOM, or other Web Platform APIs like Cookies. Those do not exist in Node.js, of course. You don't have the document, window and all the other objects that are provided by the browser.

- And in the browser, we don't have all the nice APIs that Node.js provides through its modules, like the filesystem access functionality.

- Another big difference is that in Node.js you control the environment. Unless you are building an open source application that anyone can deploy anywhere, you know which version of Node.js you will run the application on. Compared to the browser environment, where you don't get the luxury to choose what browser your visitors will use, this is very convenient.

- This means that you can write all the modern ES6-7-8-9 JavaScript that your Node.js version supports.

- Since JavaScript moves so fast, but browsers can be a bit slow to upgrade, sometimes on the web you are stuck with using older JavaScript / ECMAScript releases.

- You can use Babel to transform your code to be ES5-compatible before shipping it to the browser, but in Node.js, you won't need that.

- Another difference is that Node.js supports both the CommonJS and ES module systems (since Node.js v12), while in the browser we are starting to see the ES Modules standard being implemented.

- In practice, this means that you can use both require() and import in Node.js, while you are limited to import in the browser. 

6. Write three different ways to reverse a string in Javascript? a. using inbuilt method, b. iteratively, c. recursively
```js
const original = "abc";
console.log(original); // abc

// Using inbuild method
const inbuiltReversed = original.split("").reverse().join("");

// Iteratively
let iterativelyReversed = "";
for ( let i = original.length-1; i >= 0; i-- ){
    iterativelyReversed += original[i];
}

// Recursively
const reverse = (s, i=0) => {
    if ( i === s.length - 1 ) return s[i];
    return reverse(s, i+1) + s[i];
}
const reversedRecursively = reverse(original);

console.log(inbuiltReversed); // cba
console.log(iterativelyReversed); // cba
console.log(reversedRecursively); // cba
```

7. Write a program to check two objects are equal ( deep equal )
```js
const deepCheck = (obj1, obj2) => {
    if ( typeof obj1 !== "object" || typeof obj2 !== "object" ){
        if ( typeof obj1 !== "object" && typeof obj2 !== "object" ) return obj1 === obj2;
        else return false;
    }
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    const keys = [...obj1Keys, ...obj2Keys];
    
    for ( const key of keys ){
        if ( !obj1.hasOwnProperty(key) || !obj2.hasOwnProperty(key) || !deepCheck( obj1[key], obj2[key] )  ) return false;
    }

    return true;
}
```

8. What is shallow equal?
- Shallow equal is checking if two values are equal in case of primitive types like string, numbers and in case of object it just checks the reference. So if you shallow compare a deep nested object it will just check the reference not the values inside that object.