import express from 'express'
import mongoose from 'mongoose';
import Addroutes from './Routes/Addroutes.js'
import cors from 'cors'
const Port=8080;
const app=express();
app.use(cors())
app.use(express.json());
app.use(Addroutes)
const MONGO_URL="mongodb+srv://Ritesh:123@cluster1.lgo3ddb.mongodb.net/Task"
mongoose.connect(MONGO_URL)
.then(() => {
  app.listen(Port, () => {
      console.log("database connected")
      console.log(`Running on PORT ${Port}`);
  });
})
.catch(error => console.error(`Error connecting to MongoDB: ${error}`));


