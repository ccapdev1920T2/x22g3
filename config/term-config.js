require("dotenv").config();

const [year, term] = process.env.CURRENT_TERM.split("/");
const termConfig = {
  currentYear: year,
  currentTerm: term,
};

module.exports = termConfig;
