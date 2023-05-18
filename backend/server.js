import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import authRoutes from "./routes/authRouth.js";

//connection file
import connect from './db.js';



const app = express()

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

//application port
const PORT = process.env.PORT || 8080;

connect();
//routes
app.use("/api",authRoutes);


app.get('/',(req,res)=>{
    try{
  res.json("get Request")
    }
    catch(error){
        res.json(error)

    }
})

// start server only when we have valid connection

connect().then(()=>{
    try{
        app.listen(port,()=>{
            console.log(`Server connected to http://localhost:${port}`)
        })
    }
    catch(error){
        console.log("cannot connect to the server");
    }

})

app.listen(PORT,()=>{
    console.log(`Server connected to ${PORT}`)
})