const crypto = require("crypto");

let start = Date.now();


crypto.pbkdf2("passowrd", "saltq", 100000, 1024, "sha512", ()=>{
    console.log(`${Date.now() - start }ms, `)
})
crypto.pbkdf2("passowrd", "saltq", 100000, 1024, "sha512", ()=>{
    console.log(`${Date.now() - start }ms, `)
})
crypto.pbkdf2("passowrd", "saltq", 100000, 1024, "sha512", ()=>{
    console.log(`${Date.now() - start }ms, `)
})
crypto.pbkdf2("passowrd", "saltq", 100000, 1024, "sha512", ()=>{
    console.log(`${Date.now() - start }ms, `)
})
crypto.pbkdf2("passowrd", "saltq", 100000, 1024, "sha512", ()=>{
    console.log(`${Date.now() - start }ms, `)
})
crypto.pbkdf2("passowrd", "saltq", 100000, 1024, "sha512", ()=>{
    console.log(`${Date.now() - start }ms, `)
})


