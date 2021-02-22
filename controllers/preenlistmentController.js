// Respond to /preenlistment
exports.renderPreenlistmentPage = (req, res) => {
  res.render('preenlistment', {
    title: 'Pre-enlistment | Animo.sys',
  });
};
