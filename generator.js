var sequential = require("sequential-ids");
 
var generator = new sequential.Generator({
  digits: 3,
  restore: "00"
});
generator.start();

module.exports=generator;