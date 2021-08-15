const express = require('express')
const cors =require('cors');

const app =express();

const taskRouter =require('./routes/taskRouter')
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/tasks',taskRouter)

app.use(cors());
const port = Process.env.PORT || 3001 ; 
app.listen( port , ()=>{
    console.log(`server started at port ${port}`);
})
