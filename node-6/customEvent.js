const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("message", (noOfEvents) => {
    console.log(`You are trying to send message! no. of times you have tried: ${noOfEvents} `);
});
let noOfEvents = 0;
setInterval(()=>{
    noOfEvents++;
    customEmitter.emit("message", noOfEvents);
    if ( noOfEvents === 10 ) process.exit(0);
}, 1000);