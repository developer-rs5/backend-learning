import App from "express"
const app = App();
import {userdata} from "./userdata.js"
import cors from "cors"
const port = 3000

app.use(App.json())
app.use(cors({
    "origin":"http://localhost:5173"
}))
app.get("/", (req,res)=>{
    res.send("Hello World")
})
app.get("/json", (req,res)=>{
    res.send({
        name:"Zenuxs",
        age:"undefined"
    })
})

app.post("/user-info", (req , res)=>{
    let data = req.body
    if(!data){
        res.send("there should be some data in body")
    }else{
        res.send("success")
        console.log(data)
    }
    
})
app.get("/user", (req,res)=>{
    res.send(userdata)
})
app.get("/user/:id", (req,res)=>{
    const id = req.params.id 
    const exestingUser  = userdata.find((userdata)=>(userdata.id==id))
    if(exestingUser){res.send(exestingUser)}
    else{res.send("USER not FOUND")}
        
})

app.get("/search", (req,res)=>{
    console.log(req.query)
    res.json(req.query)
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})