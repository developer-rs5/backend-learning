const fs = require("fs")

setImmediate(()=>{
    console.log("immediate")
},0)

setTimeout(() => {
    console.log("timeout")
}, 0);

console.log("console.log")