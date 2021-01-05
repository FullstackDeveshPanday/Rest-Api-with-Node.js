import express from 'express';
import bodyparser from 'body-parser';

import userRoutes from './routes/users.js';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const app=express();
const PORT = 5000;

app.use(bodyparser.json());
app.use('/users',userRoutes);
app.get('/',(req,res)=> res.send('Hello From Devesh....'));

app.listen(PORT,()=>console.log(`Server is running port:http://localhost:${PORT}`));