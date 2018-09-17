var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

module.exports = function (passport) {
    passport.use('admin_login', new LocalStrategy({
        passReqToCallback: true,
        usernameField: 'email',
        passwordField: 'password'
    },
    function (req, email, password, done) {
        // check in mongo if a user with username exists or not  
        connection.getConnection(function (err, connection) {
            connection.query('SELECT * from users where active = 1 AND role = 1 AND email = ?', email, function (err, user) {
                connection.release();
                if (err)
                    return done(err);
                // Username does not exist, log error & redirect back  
                if (user.length <= 0) {
                    return done(null, false, req.flash('message', 'Your account is not assosiated with us.'));
                }
                // User exists but wrong password, log the error  
                if (user[0].password == password) {
                    return done(null, user[0]);
                } else {
                    return done(null, false, req.flash('message', 'Invalid username/password.'));
                }
            });
        });
    }));

    passport.use('signup', new LocalStrategy({
        passReqToCallback: true
    },
    function (req, username, password, done) {
        findOrCreateUser = function () {
            // find a user in Mongo with provided username
            User.findOne({'username': username}, function (err, user) {
                // In case of any error return
                if (err) {
                    console.log('Error in SignUp: ' + err);
                    return done(err);
                }
                // already exists
                if (user) {
                    return done(null, false,
                            req.flash('message', 'User Already Exists'));
                } else {
                    // if there is no user with that email
                    // create the user
                    var newUser = new User();
                    // set the user's local credentials
                    newUser.username = username;
                    newUser.password = createHash(password);
                    newUser.email = req.param('email');
                    newUser.firstName = req.param('firstName');
                    newUser.lastName = req.param('lastName');

                    // save the user
                    newUser.save(function (err) {
                        if (err) {
                            console.log('Error in Saving user: ' + err);
                            throw err;
                        }
                        console.log('User Registration succesful');
                        return done(null, newUser);
                    });
                }
            });
        };

        // Delay the execution of findOrCreateUser and execute 
        // the method in the next tick of the event loop
        process.nextTick(findOrCreateUser);
    }));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        connection.getConnection(function (err, connection) {
            connection.query('SELECT id,first_name,last_name,email,phone,dob from users where id = ?', id, function (err, user) {
                connection.release();
                if (err)
                    throw err;
                var gravatar = require('gravatar');
                user[0].gravatar_url = gravatar.url(user[0].email, {protocol: 'http', s: '200'});
                done(err, user[0]);
            });
        });
    });
}



var isValidPassword = function (user, password) {
    return bcrypt.compareSync(password, user.password);
}


// Generates hash using bCrypt
var createHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}
