import 'dotenv';
import mongoose from 'mongoose';

function connection(): void {
  mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/tools', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default connection;
