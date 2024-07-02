const express = require('express');
const route = require("./routes/routes");
const app = express()
app.use(express.json())


app.use("/",route)


app.listen(8000,()=>{
console.log("Server is running on port 8000")
})