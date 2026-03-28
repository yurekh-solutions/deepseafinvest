import mongoose, { Schema, Document } from 'mongoose';

export interface IAdmin extends Document {
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const AdminSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Admin ||
  mongoose.model<IAdmin>('Admin', AdminSchema);
