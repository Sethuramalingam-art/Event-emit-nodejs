const express = require("express");
const https = require("https");
const app = express();

const PORT = 5000;

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});

//Processnexttick vs setimmediate

setImmediate(function A() {
  console.log("1st immediate");
});

setImmediate(function B() {
  console.log("2nd immediate");
});

process.nextTick(function C() {
  console.log("1st process");
});

process.nextTick(function D() {
  console.log("2nd process");
});

// First event queue ends here
console.log("program started");
