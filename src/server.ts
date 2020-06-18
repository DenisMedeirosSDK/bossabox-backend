import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';

// import connectionDB from './database/connection';
const uri = process.env.MONGO_URL
  ? process.env.MONGO_URL
  : 'mongodb://localhost/tools';
const server = express();

server.use(express.json());
server.use(cors());

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// connectionDB();
server.use(routes);

server.listen(process.env.PORT || 3333);
