const fs = require("fs")
const http = require("http")

const server = http.createServer((req,res)=>{
  res.end("helloworld")

  if (fs.existsSync("logs.txt")){
    fs.appendFileSync("logs.txt", `new user requested on ${req} \n` )
            console.log(req)
  } else{
    fs.writeFileSync("logs.txt", "", (error)=>{
        console.log(`error while genereating file ${error}`)
        fs.appendFileSync("logs.txt", `new user requested on ${req} \n`)
        console.log(req)
    })
  }
  
})

server.listen(3000 , ()=>{
    console.log("server is running")
}) 