(async () => {
  console.log('Starting population process...');
  await require('./populate-accounts')();
  await require('./populate-preenlistment')();
  await require('./populate-colleges')();
  await require('./populate-termdetails')();
  await require('./populate-scholarship')();
})();
