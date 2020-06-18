import mongose, { Schema, Document } from 'mongoose';

interface ITool extends Document {
  title: string;
  description: string;
  link: string;
  tags: [string];
}

const ToolSchema: Schema = new Schema({
  title: String,
  description: String,
  link: String,
  tags: [String],
});

const Tool = mongose.model<ITool>('Tools', ToolSchema);

export default Tool;
