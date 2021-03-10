const hbs = require('express-handlebars').create({
  extname: 'hbs',
  defaultLayout: 'main',
  helpers: {
    section(name, options) {
      if (!this._sections) this._sections = {};
      this._sections[name] = options.fn(this);
      return null;
    },
  },
});

module.exports = app => {
  app.engine('hbs', hbs.engine);
  app.set('view engine', 'hbs');

  app.use((req, res, next) => {
    if (!req.locals) req.locals = {};

    if (!req.locals.hbs) req.locals.hbs = hbs;

    next();
  });

  return hbs;
};
