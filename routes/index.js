
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

    /*Student Module*/
    app.get('/admin/users/students', isAuthenticated, function (req, res) {
        var breadcrumb = [{name: 'Home', link: '/admin/dashboard'}, {name: 'Students', link: ''}];
        connection.getConnection(function (err, connection) {
            connection.query('SELECT * from users where role = 4', function (err, users) {
                connection.release();
                res.render('admin/users/students', {result: users, moment: moment, breadcrumb: breadcrumb});
            });
        });
    });

    app.get('/admin/users/edit_student/:id', isAuthenticated, function (req, res) {
        var id = req.params.id;
        var breadcrumb = [{name: 'Home', link: '/admin/dashboard'}, {name: 'Students', link: '/amdin/users/students'}, {name: 'Manage Students', link: ''}];
        connection.getConnection(function (err, connection) {
            connection.query('SELECT * from users where id = ?', id, function (err, user) {
                connection.release();
                if (user.length > 0) {
                    res.render('admin/users/edit_student', {row: user[0], moment: moment, breadcrumb: breadcrumb});
                } else {
                    res.redirect('/admin/users/students');
                }
            });
        });
    });

    app.post('/admin/users/update_student/:id', isAuthenticated, function (req, res) {
        var id = req.params.id;
        connection.getConnection(function (err, connection) {
            connection.query('SELECT * from users where email = ? AND id <> ? limit 1', [req.body.email, id], function (error, results) {
                if (results.length > 0) {
                    req.flash('error', 'Email already exist.');
                    res.redirect('/admin/users/edit_student/' + id);
                } else {
                    connection.query("UPDATE users SET first_name = ?,last_name=?,email=? WHERE id = ?", [req.body.first_name, req.body.last_name, req.body.email, id], function (error, result) {
                        if (err)
                            throw err;
                        connection.release();
                        req.flash('success', 'Student updated successfuly.');
                        res.redirect('/admin/users/students');
                    });
                }
            });
        });
    });

    app.get('/admin/users/delete_student/:id', isAuthenticated, function (req, res) {
        var id = req.params.id;
        connection.getConnection(function (err, connection) {
            connection.query('DELETE FROM users WHERE id = ?', id, function (err, user) {
                if (err)
                    throw err;
                connection.release();
                req.flash('success', 'Student deleted successfuly.');
                res.redirect('/admin/users/students');
            });
        });
    });


    /*Parents Module*/
    app.get('/admin/users/parents', isAuthenticated, function (req, res) {
        var breadcrumb = [{name: 'Home', link: '/admin/dashboard'}, {name: 'Parents', link: ''}];
        connection.getConnection(function (err, connection) {
            connection.query('SELECT * from users where role = 3', function (err, users) {
                connection.release();
                res.render('admin/users/parents', {result: users, moment: moment, breadcrumb: breadcrumb});
            });
        });
    });

    app.get('/admin/users/edit_parent/:id', isAuthenticated, function (req, res) {
        var id = req.params.id;
        var breadcrumb = [{name: 'Home', link: '/admin/dashboard'}, {name: 'Parents', link: '/amdin/users/parents'}, {name: 'Manage Parents', link: ''}];
        connection.getConnection(function (err, connection) {
            connection.query('SELECT * from users where id = ?', id, function (err, user) {
                connection.release();
                if (user.length > 0) {
                    res.render('admin/users/edit_parent', {row: user[0], moment: moment, breadcrumb: breadcrumb});
                } else {
                    res.redirect('/admin/users/parents');
                }
            });
        });
    });

    app.post('/admin/users/update_parent/:id', isAuthenticated, function (req, res) {
        var id = req.params.id;
        connection.getConnection(function (err, connection) {
            connection.query('SELECT * from users where email = ? AND id <> ? limit 1', [req.body.email, id], function (error, results) {
                if (results.length > 0) {
                    req.flash('error', 'Email already exist.');
                    res.redirect('/admin/users/edit_parent/' + id);
                } else {
                    connection.query("UPDATE users SET first_name = ?,last_name=?,email=? WHERE id = ?", [req.body.first_name, req.body.last_name, req.body.email, id], function (error, result) {
                        if (err)
                            throw err;
                        connection.release();
                        req.flash('success', 'Parent updated successfuly.');
                        res.redirect('/admin/users/parents');
                    });
                }
            });
        });
    });

    app.get('/admin/users/delete_parent/:id', isAuthenticated, function (req, res) {
        var id = req.params.id;
        connection.getConnection(function (err, connection) {
            connection.query('DELETE FROM users WHERE id = ?', id, function (err, user) {
                if (err)
                    throw err;
                connection.release();
                req.flash('success', 'Parent deleted successfuly.');
                res.redirect('/admin/users/parents');
            });
        });
    });

    /*Teacher Module*/
    app.get('/admin/users/teachers', isAuthenticated, function (req, res) {
        var breadcrumb = [{name: 'Home', link: '/admin/dashboard'}, {name: 'Teachers', link: ''}];
        connection.getConnection(function (err, connection) {
            connection.query('SELECT * from users where role = 2', function (err, users) {
                connection.release();
                res.render('admin/users/teachers', {result: users, moment: moment, breadcrumb: breadcrumb});
            });
        });
    });

    app.get('/admin/users/edit_teacher/:id', isAuthenticated, function (req, res) {
        var id = req.params.id;
        var breadcrumb = [{name: 'Home', link: '/admin/dashboard'}, {name: 'Teachers', link: '/amdin/users/teachers'}, {name: 'Manage Teachers', link: ''}];
        connection.getConnection(function (err, connection) {
            connection.query('SELECT * from users where id = ?', id, function (err, user) {
                connection.release();
                if (user.length > 0) {
                    res.render('admin/users/edit_teacher', {row: user[0], moment: moment, breadcrumb: breadcrumb});
                } else {
                    res.redirect('/admin/users/teachers');
                }
            });
        });
    });

    app.post('/admin/users/update_teacher/:id', isAuthenticated, function (req, res) {
        var id = req.params.id;
        connection.getConnection(function (err, connection) {
            connection.query('SELECT * from users where email = ? AND id <> ? limit 1', [req.body.email, id], function (error, results) {
                if (results.length > 0) {
                    req.flash('error', 'Email already exist.');
                    res.redirect('/admin/users/edit_teacher/' + id);
                } else {
                    connection.query("UPDATE users SET first_name = ?,last_name=?,email=? WHERE id = ?", [req.body.first_name, req.body.last_name, req.body.email, id], function (error, result) {
                        if (err)
                            throw err;
                        connection.release();
                        req.flash('success', 'Teacher updated successfuly.');
                        res.redirect('/admin/users/teachers');
                    });
                }
            });
        });
    });

    app.get('/admin/users/delete_teacher/:id', isAuthenticated, function (req, res) {
        var id = req.params.id;
        connection.getConnection(function (err, connection) {
            connection.query('DELETE FROM users WHERE id = ?', id, function (err, user) {
                if (err)
                    throw err;
                connection.release();
                req.flash('success', 'Teacher deleted successfuly.');
                res.redirect('/admin/users/teachers');
            });
        });
    });

    app.get('/admin/attandance', isAuthenticated, function (req, res) {
        res.render('admin/users/attandance', {});
    });

}
// As with any middleware it is quintessential to call next()
// if the user is authenticated
var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/admin/login');
}



