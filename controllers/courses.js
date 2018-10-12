
module.exports = function (app, passport, moment) {
    /*Course Module*/
    app.get('/admin/courses', isAuthenticated, function (req, res) {
        var breadcrumb = [{name: 'Courses', link: '/admin/courses'}, {name: 'Add Course', link: ''}];
        connection.getConnection(function (err, connection) {
            connection.query('SELECT c.*,cc.name as category_name,cp.name as package_name from courses as c LEFT JOIN course_categories cc ON cc.id=c.course_categories_id LEFT JOIN course_packages cp ON cp.id=c.course_packages_id', function (err, users) {
                connection.release();
                res.render('admin/courses/courses', {result: users, moment: moment, breadcrumb: breadcrumb});
            });
        });
    });

    app.get('/admin/courses/add_course', isAuthenticated, function (req, res) {
        var breadcrumb = [{name: 'Courses', link: '/admin/courses'}, {name: 'Add Course', link: ''}];
        connection.getConnection(function (err, connection) {
            connection.query('SELECT * from course_categories where status = 1', function (err, category) {
                connection.query('SELECT * from course_packages where status = 1', function (err, package) {
                    connection.release();
                    res.render('admin/courses/add_course', {breadcrumb: breadcrumb, category: category.length > 0 ? category : '', package: package.length > 0 ? package : ''});
                });
            });
        });
    });
    app.post('/admin/courses/add_course', isAuthenticated, function (req, res) {
        var id = req.params.id;
        connection.getConnection(function (err, connection) {

            var saveData = [req.body.name, req.body.age ? req.body.age.toString() : null, req.body.duration, req.body.category ? req.body.category : null, req.body.package ? req.body.package : null, req.body.status];
            connection.query("INSERT INTO courses SET name = ?,age=?,duration=?,course_categories_id=?,status=?", saveData, function (error, result) {
                if (err)
                    throw err;
                connection.release();
                if (result.affectedRows > 0) {
                    req.flash('success', 'Course added successfuly.');
                    res.redirect('/admin/courses');
                } else {
                    req.flash('success', 'Something error.');
                    res.redirect('/admin/courses/add_course');
                }
            });
        });
    });

    app.get('/admin/courses/edit_course/:id', isAuthenticated, function (req, res) {
        var id = req.params.id;
        var breadcrumb = [{name: 'Courses', link: '/admin/courses'}, {name: 'Edit Course', link: ''}];
        connection.getConnection(function (err, connection) {
            connection.query('SELECT * from courses where id = ?', id, function (err, course) {
                connection.release();
                if (course.length > 0) {
                    connection.query('SELECT * from course_categories where status = 1', function (err, category) {
                        connection.query('SELECT * from course_packages where status = 1', function (err, package) {
                            res.render('admin/courses/edit_course', {row: course[0], breadcrumb: breadcrumb, category: category.length > 0 ? category : '', package: package.length > 0 ? package : ''});
                        })
                    })
                } else {
                    res.redirect('/admin/users/courses');
                }
            });
        });
    });

    app.post('/admin/courses/update_course/:id', isAuthenticated, function (req, res) {
        var id = req.params.id;
        connection.getConnection(function (err, connection) {
            var saveData = [req.body.name, req.body.age ? req.body.age.toString() : null, req.body.duration, req.body.category ? req.body.category : null, req.body.package ? req.body.package : null, req.body.status, id];
            connection.query("UPDATE courses SET name = ?,age=?,duration=?,course_categories_id=?,course_packages_id=?,status=? WHERE id = ?", saveData, function (error, result) {
                if (err)
                    throw err;
                connection.release();
                if (result.affectedRows > 0) {
                    req.flash('success', 'Course updated successfuly.');
                    res.redirect('/admin/courses');
                } else {
                    req.flash('success', 'Something error.');
                    res.redirect('/admin/courses/edit_course/' + id);
                }
            });
        });
    });
    app.get('/admin/courses/delete_course/:id', isAuthenticated, function (req, res) {
        var id = req.params.id;
        connection.getConnection(function (err, connection) {
            connection.query('DELETE FROM courses WHERE id = ?', id, function (err, user) {
                if (err)
                    throw err;
                connection.release();
                req.flash('success', 'Course deleted successfuly.');
                res.redirect('/admin/courses');
            });
        });
    });

    app.get('/admin/attandance', isAuthenticated, function (req, res) {
        res.render('admin/users/attandance', {});
    });
}

