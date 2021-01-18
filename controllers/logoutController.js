exports.logout_landing_page_get = (req, res) => {
    res.redirect('/login')
    // res.render('logout', {
    //     layout: false,
    //     // addedStyles: ['sessions', 'forms'],
    //     title: 'Logout | Animo.sys',
    // });
};
