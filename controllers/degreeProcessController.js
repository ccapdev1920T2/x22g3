exports.degreeprocess_landing_page_get = (req, res) => {
    res.render("degree-process", {
        title: "Degree Process | Animo.sys",
        addedStyles: ["forms"],
    });
};
