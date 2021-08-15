const express = require('express')
const cors =require('cors');

const app =express();

const taskRouter =require('./routes/taskRouter')
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/tasks',taskRouter)

app.use(cors());

app.listen( process.env.PORT || 3001 , ()=>{
    console.log('server started at port 3001');
})
