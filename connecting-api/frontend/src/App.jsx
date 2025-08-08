import React from 'react'
import "./App.css"
import { useState } from 'react';
import axios from "axios"

const App = () => {
  let [data, setData] = useState('')
  let [id, setID] = useState("")
  let api = "http://localhost:3000/"
  async function sendGet() {
    // const res = await fetch("http://localhost:8000/")
    // let Data = await res.json()
    // setData(Data);
    // console.log(Data)

    axios.post(`${api}user-info`, {
        "name":"rishabh",
        "age":18,
        "class":"9th"
      }).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })

    if (id) {
      axios.get(`${api}user/${id}`)
        .then((res) => {
          console.log(res)
          setData(res.data)
        }).catch((error) => {
          console.log(error)
          setData(error)
        })
        return;
    }
    axios.get(`${api}user`)
      .then((res) => {
        console.log(res)
        setData(res.data)
      }).catch((error) => {
        console.log(error)
        setData(error)
      })
      
  }
  return (
    <div className='mainn'>
      <div>
        <input type="text" value={id} placeholder="User ID" onChange={(e)=>{setID(e.target.value)}}/>
      </div>
      <div><button onClick={sendGet}>Send</button></div>
      <div>
        {JSON.stringify(data, null, 2)}
      </div>
    </div>

  )
}

export default App