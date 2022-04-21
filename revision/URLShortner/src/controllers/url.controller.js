const Shorten = require("../models/url.model");
const randomString = require("../utils/randomString");

const createShortURL = async ( req, res ) => {
    try {
        const url = req.body.url;
        let shorten, isAlreadyPresent = true;
        let k = 6;
        while ( isAlreadyPresent ){
            shorten = randomString(k++);
            isAlreadyPresent = await Shorten.findOne({ shortenUrl: shorten }).exec(); 
        }
        const data = {
            shortenUrl: shorten,
            originalUrl: url
        }
        if ( req.body.expiresIn ) data.expiresIn = req.body.expiresIn;
        const result = await Shorten.create(data);
        return res.status(200).json({...result._doc, shortenUrl: "http://localhost:5000/url/visit/" + result.shortenUrl });
    } catch ( err ) {
        console.log(err);
        res.status(500).json(err);
    }
}

const visitShortenURL = async (req, res) => {
    try {
        const url = req.params.url;
        const result = await Shorten.findOne({shortenUrl: url});
        if ( !result ) return res.status(404).send("Invalid URL!");

        const curr = new Date();
        const expiryDate = new Date(result.date);

        if ( result.date !== -1 && expiryDate - curr < 0 ) return  res.status(404).send("Expired URL!");

        return res.redirect(307, result.originalUrl);
    } catch ( err ) {
        console.log(err);
        res.status(500).json(err);
    }
};

module.exports = {
    visitShortenURL,
    createShortURL
};