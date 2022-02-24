const express = require("express");
const router = express.Router();
const passport = require("../config/passport.config");

router.get('/google',
    passport.authenticate('google', { scope:
            [ 'email', 'profile' ]
        }
    )
);

router.get( '/google/callback',
    passport.authenticate( 'google', {
        failureRedirect: '/auth/google/failure'
    }), (req, res) => {
        res.status(200).json({ status: "success", msg: "signin successful!", token: req.user.token });    
    }
);

router.get('/google/failure', (req, res) => {
    res.send("Failed to login please try again!");
});

module.exports = router;