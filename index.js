const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.setMaxListeners(20); // The emitter.setMaxListeners method allows developers to increase the limit of listeners for a particular EventEmitter instance.

//Node.js has a default limit of 10 listeners per event to prevent memory leaks.
//Node.js will log a MaxListenersExceededWarning to the console when this limit is exceeded.
//This safeguard helps developers detect potential memory leaks.
for (var i = 0; i < 21; i++) {
  emitter.on("data", () => console.log("Data Event Triggered"));
}

//Example of Adjusting the Default Limit
EventEmitter.defaultMaxListeners = 15;
