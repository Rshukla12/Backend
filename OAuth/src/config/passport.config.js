const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

const createToken = require("../utils/tokenService");

const User = require("../models/user.model");

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback",
        passReqToCallback: true
    },
    async function (request, accessToken, refreshToken, profile, done) {
        try {
            const user = await User.findOne({ google_id: profile.id });
            if ( !user ) {
                const user = await User.create({
                    name: profile?._json?.name,
                    email: profile?._json?.email,
                    google_id: profile.id
                });
                if ( !user ) return res.status(500).json({ msg: "something went wrong while messaging!" });
                const token = createToken( user );
                user.token = token;
                done( null, user );
            }
            done( null, user );
        } catch ( err ) {
            done( err, null );
        }
    }
));

module.exports = passport;