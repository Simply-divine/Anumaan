const passport = require('passport');
const { Strategy } = require('passport-jwt');
const User = require('../../models/User');

passport.use(
  'jwt',
  new Strategy(
    {
      jwtFromRequest: (req) => {
        let token = null;
        if (req && req.cookies) token = req.cookies.jwt;
        console.log('Cookie', req.headers);
        return token;
      },
      secretOrKey: process.env.JWT_TOKEN_SECRET,
    },
    (payload, done) => {
      console.log(payload);
      User.findById(payload.id, (err, user) => {
        if (err) return done(err, false);
        if (user) return done(null, user);
        else return done(null, false);
      });
    }
  )
);
