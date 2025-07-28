const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/express_demo")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Mongo Error:", err));

app.post('/users',async(req,res)=>{
   const user = await User.create(req.body)
   res.json(user)
})
app.get('/users',async(req,res)=>{
    const user = await User.find()
    res.json(user)
})

app.get('/users/:id',async(req,res)=>{
    const user = await User.findById(req.params.id)
    res.json(user)
})

app.put('/users/:id',async(req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id,req.body);
    res.json(user)
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
