import mongoose, {Schema, Document, mongo} from "mongoose";

export interface ITask extends Document {
    title: String,
};

export interface ITaskObj extends Document {
    title: String,
    _id: String
};

const TaskSchema: Schema = new Schema({
    title: String

});

export default mongoose.model<ITask>('Task', TaskSchema);