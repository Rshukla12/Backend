const express = require("express");
const cors = require("cors");

const app = express();
app.use( cors() );

// IPTable will help us maintain which IP requested when
const IPTable = {};

app.use( (req, res, next) => {
    const ip = req.ip;
    let currIP = IPTable[ip];
    // new request or more than 1 min old request and time is in ms so 60000 will be 1 min;
    if ( !currIP || ((Date.now() - currIP.startTime) > 60000 ) ){
        currIP = {
            startTime : Date.now(),
            remainingRequests : 10
        } 
        IPTable[ip] = currIP;
    }        
    // if remaining request is then we will stop requests here only
    if ( !currIP.remainingRequests ) return res.status(401).send("You have exhauseted your limit please wait!");

    currIP.remainingRequests--;
    req.remainingRequests = currIP.remainingRequests;
    next();
})

app.get( "/", ( req, res ) => {
    res.send( `You have ${req.remainingRequests} requestes remaining for this minute` )
})

app.listen(5000, () => {
    console.log("listening on port 5000!");
});