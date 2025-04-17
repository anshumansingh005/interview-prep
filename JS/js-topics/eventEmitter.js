const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.on("newEvent", () => {
  console.log("New Emitter emitted BC");
});

myEmitter.emit("newEvent");
