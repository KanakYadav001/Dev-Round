import { auth } from './controller/user.controller';
//RR V1

import express from "express"
import authRoutes from "./routes/user.routes";

const app = express();


app.use(express.json())



app.use('/api/v1/auth' , authRoutes)



export default app ;
