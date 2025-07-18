import mongoose from "mongoose";

import express from "express";

import {Todo} from "./models/Todo";

//connection string ke liye localhost me jaye mongodb leave symblo extension ke niche hai right click kr ke copy kre 

let a=await mongoose.connect("mongodb://localhost:27017/")

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
