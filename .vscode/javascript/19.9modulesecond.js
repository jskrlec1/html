// Module-second.js
var a = require("./19.9modulefirst");
var module2 = {
  y: function () {
    a.y();
  },
};
console.log(module2.y());  

