const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;
const { pool } = require("./dbConfig");

module.exports = (passport) => {
  passport.use(
    new localStrategy((username, password, done) => {
      pool.query(
        `SELECT * FROM users WHERE username=$1`,
        [username],
        (err, results) => {
          if (err) throw err;

          if (results.rows.length > 0) {
            const user = results.rows[0];
            bcrypt.compare(user.password, password, (err, isMatch) => {
              if (err) throw err;

              if (isMatch) {
                return done(null, user);
              } else {
                return done(null, false, {message: "Username or password is incorrect",});
              }
            });
          } else {
              return done(null,false,{message:"Username or password is incorrect"})
          }
        }
      );
    })
  );
};
