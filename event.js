const Event = require("events");

const event = new Event();

event.on("GREET", (username)=>{
    console.log("hello", username)
})

event.emit("GREET", "Rishabh")