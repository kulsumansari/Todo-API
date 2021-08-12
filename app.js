const express = require('express')

const app =express();

const taskRouter =require('./routes/taskRouter')

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/tasks',taskRouter)
app.listen(3001 , ()=>{
    console.log('server started');
})