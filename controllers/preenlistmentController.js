
// Respond to /preenlistment
exports.preenlisted_courses_list = (req, res) => {
    res.render('preenlistment', {
        title: "Pre-enlistment | Animo.sys",
        addedStyles: ['forms']
    });
}