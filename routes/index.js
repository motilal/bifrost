
module.exports = function (app, passport, validator) {

    /* GET home page. */
    app.get('/', isAuthenticated, function (req, res) {
        res.redirect('/dashboard');
    });

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/login', function (req, res) {
        res.render('template/login', {message: req.flash('message')});
    });

    app.post('/login', passport.authenticate('login', {
        successRedirect: '/dashboard',
        failureRedirect: '/login',
        failureFlash: true
    }));

    app.get('/signup', function (req, res) {
        res.render('template/signup', {message: req.flash('message')});
    });

    /* Handle Registration POST */
    app.post('/signup', passport.authenticate('signup', {
        successRedirect: '/login',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    app.get('/dashboard', isAuthenticated, function (req, res) {
        res.render('template/dashboard', {});
    });

    app.get('/users/teachers', isAuthenticated, function (req, res) {
        var breadcrumb = [{name: 'Home', link: '/'}, {name: 'Users', link: 'users/teaches'}, {name: 'Teacher', link: ''}];
        res.render('template/users/teachers', {breadcrumb: breadcrumb});
    });

    app.get('/users/students', isAuthenticated, function (req, res) {
        res.render('template/users/students', {});
    });

    app.get('/users/parents', isAuthenticated, function (req, res) {
        res.render('template/users/parents', {});
    });

}
// As with any middleware it is quintessential to call next()
// if the user is authenticated
var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}



