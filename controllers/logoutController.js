exports.logout_landing_page_get = (req, res) => {
    res.render('logout', {
        layout: 'sessions',
        addedStyles: ['sessions', 'forms'],
        title: 'Logout | Animo.sys',
    });
};
