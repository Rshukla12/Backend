const express = require("express");
const uuid = require("uuid");
let data = require("./books.json");
const booksRouter = express.Router();

const objMap = {
    "author":"",
    "book_name": "",
    "pages": "",
    "published_year": ""
};

booksRouter.get("/", (req, res) => {
    res.status(200).json({
        "request_time": req.requestTime,
        "data": data 
    });
});

booksRouter.post("/books", (req, res) => {
    try {
        const input = req.body;
        for ( const q in objMap ){
            if ( !input[q] ) throw new Error(q + " is missing!");
        }
        const book = {
            id: uuid.v4(),
            ...input
        }
        data.push(book);
        res.status(200).json({
            "request_time": req.requestTime,
            "data": book
        });
    } catch ( err ){
        res.status(400).send(err);
    }
}); 

booksRouter.get("/books/:id", (req, res) => {
    try {
        const book = data.find( b => b.id === req.params.id );
        res.status(200).json({
            "request_time": req.requestTime,
            "data": book
        });
    } catch ( err ) {
        res.status(404).send("Book Not found!")
    }
});

booksRouter.patch("/books/:id", (req, res) => {
    try {
        const { author, published_year } = req.body;
        let newB;
        data.forEach( b => {
            if ( b.id === req.params.id ){
                let newB = b;
                if ( author ) newB.author = author;
                if ( published_year ) newB.published_year = published_year;
                return newB;
            } else {
                return b;
            }
        });
        if ( !newB ) throw new Error("book not found!");
        res.status(201).json({
            "request_time": req.requestTime,
            "data": newB
        });
    } catch ( err ) {
        res.status(404).send("Book Not found!")
    }
});

booksRouter.delete("/books/:id", (req, res) => {
    try {
        data = data.filter( b => b.id !== req.params.id );
        res.status(200).json("deleted successfully!");
    } catch ( err ) {
        res.status(404).send("Book Not found!")
    }
});

module.exports = booksRouter;