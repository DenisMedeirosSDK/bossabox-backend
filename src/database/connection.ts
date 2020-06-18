import 'dotenv';
import mongoose from 'mongoose';

function connection() {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default connection;
