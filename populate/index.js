(async () => {
  console.log("Starting population process...");
  await require("./populate-accounts")();
  await require("./populate-students")();
})();
