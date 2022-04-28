1. Explain in brief what is node js?
- As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. Many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.

- Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js’ package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

2. How is node js non blocking?
- Node JS internally uses event loop to execute code, when there is some code which can take some time to be executed like reading/writing file it is not executed directly on main flow instead it is converted into a promise which would be executed in by node js system and would inform our main program or event loop once the execution of the program i.e. file is read, then the event loop takes that program and starts the execution again.  

3. What is throughput?
- Throughput is generally defined as the number of requests or data that a system can process simultaneously 

4. How is Node js having high IO throughput?
- Node js uses asynchronous/non blocking method which means that tasks requering large time are put aside while node js process next request, making it possible node js to process more number of requests.  

5. What are CPU intensive tasks?
-  Sorting, search, graph traversal, matrix multiply are all CPU operations, a process is CPU-intensive or not it depends on how much and how frequent are their execution.

6. How can you end up blocking your main thread in node.js?
- https://www.geeksforgeeks.org/how-node-js-overcome-the-problem-of-blocking-of-i-o-operations/

7. What is the event loop?
- https://medium.com/@mmoshikoo/event-loop-in-nodejs-visualized-235867255e81

8. What are different phases in event loop?
- https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

9. What is process.tick?
- https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#process-nexttick

10. When can process.tick starve your event loop?
- https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#process-nexttick

11. What is the difference between setTimeout and setInterval?
- setTimeout executes the fuction once after the given time, which setInterval repeates the execution after the interval of given time till it is cancelled or program is killed.

12. How can you make a network request with http module from the backend?
```js
    https.get(url, res => {
        res.setEncoding("utf8");
        let body = "";
        res.on("data", data => {
            body += data;
        });
        res.on("end", () => {
            body = JSON.parse(body);
            console.log(body);
        });
    });
```

13. How can you create your own events?
- We can use event emitter class to create our own functions and define the the event in event.on while creating event using event.emit and unregister through event.off

14. What are clusters?
- In Node, a cluster is a network of processes that share a single server port. Each process running in cluster-mode is capable of running on a separate CPU.
This means the optimal number of processes a cluster can have would depend on the number of CPU cores available on the executing machine.

15. How does your Node.js application handle scale? Elaborate
- https://www.freecodecamp.org/news/scaling-node-js-applications-8492bd8afadc/

16. What is the difference between readFile and readFileSync?
- readFile is a non blocking and asynchronous operation i.e. it reads file in small sections or chunks while readFileSync is blocking and synchronous operation i.e. it completely read file and then give output as a whole.

17. What are CORS? How do you configure them? Why do you need them?
- https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

18. What is rate limiting?
- Rate limiting is a strategy for limiting network traffic. It puts a cap on how often someone can repeat an action within a certain timeframe – for instance, accessing data through API. Rate limiting can help stop certain kinds of malicious bot activity. It can also reduce strain on web servers.

19. How does middlewares work in express?
- Middleware functions are functions that have access to the request object ( req ), the response object ( res ), and the next function in the application's request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

20. What is the difference between Encryption and Hashing?
- Encryption is a two way process that means if we have the key we can decrypt the data, while hashing is a one way function i.e. original data can not be extracted from hashed data.

21. What is the difference between https and http?
- 

22. What is TLS?
- TLS refers to Transport Layer Security which is an evolution on SSL ( Secure Socket Layer ) and is a form of 

23. What is AES?
- AES is a block cipher: it will receive 128 bits of text which will be transformed to obtain a different 128 bits of encrypted data. But 128 bits or 16 characters most probably won't be enough to fit all the data we wish to encrypt, so how does AES manage to encrypt whole documents filled up with text. 

24. What is JWT Token? Why do we need to use JWT? What are some pros and cons?
- https://jwt.io/introduction

25. What is salting? Where do we store salt?
- Salting works by adding an extra secret value to the input, extending the length of the original password.

In this example, the password is Blumira and the salt value is Security.Wiki. The hash value would be made up from the combination of the two. This provides some protection for those people who use common words as their password.

However, if someone learns of the salt value that is used, then they just add it to the end (or start) of each dictionary word they try in their attack. To make brute forcing attacks more difficult, random salts can be used, one for each password.

Salts can also be created from multiple parts such as the current date-time, the username, a secret phrase, a random value, or a combination of them. Bcrypt, for example, is a hashing algorithm that includes the use of unique salts per-hash by default.

26. What is the difference between Authorisation and Authentication?
- Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board.

27. What is difference between JS on the browser and node?
- Unlike the browser where Javascript is sandboxed for your safety, node. js has full access to the system like any other native application. This means you can read and write directly to/from the file system, have unrestricted access to the network, can execute software and more.

28. What is V8?
- V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. It implements ECMAScript and WebAssembly, and runs on Windows 7 or later, macOS 10.12+, and Linux systems that use x64, IA-32, ARM, or MIPS processors. V8 can run standalone, or can be embedded into any C++ application.