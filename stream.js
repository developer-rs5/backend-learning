const {Readable} = require("stream")

const ReadableSteam = new Readable({
    read() {}, 
});

ReadableSteam.on("data", (chunk)=>{
    console.log(chunk.toString())
})

ReadableSteam.push("hello")