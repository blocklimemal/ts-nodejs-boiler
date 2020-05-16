import express from 'express';
import {Request,Response,NextFunction}  from 'express';
import {json} from 'body-parser';
import router from './routes/routes.js';
const app = express();
app.use(json());
app.use('/',router);

app.listen(8000,()=>{


    console.log('..................');
})