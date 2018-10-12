
module.exports = function (app, passport, moment) {

    /* GET home page. */
    app.get('/', isAuthenticated, function (req, res) {
        res.redirect('/admin/dashboard');
    });

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });


    /*admin function*/
    app.get('/admin/login', function (req, res) {
        res.render('admin/login', {message: req.flash('message')});
    });

    app.post('/admin/login', passport.authenticate('admin_login', {
        successRedirect: '/admin/dashboard',
        failureRedirect: '/admin/login',
        failureFlash: true
    }));
    app.get('/admin/dashboard', isAuthenticated, function (req, res) {
        res.render('admin/dashboard', {});
    });

}




