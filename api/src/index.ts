import express from 'express';
import { Router ,json } from 'express';
import complaintsRouter from './routes/complaints/index';

const app = express();
app.use(json()); // Middleware to parse JSON bodies

//const router = Router();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    console.log('Received a reuest');
    res.send('Hello World!');
});

app.use('/complaints', complaintsRouter);

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
})