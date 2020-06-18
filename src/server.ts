import 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import connectionDB from './database/connection';

const server = express();
server.use(express.json());

server.use(cors());
connectionDB();
server.use(routes);

server.listen(process.env.PORT || 3333);
