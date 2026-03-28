import mongoose, { Schema, Document } from 'mongoose';

export interface ILead extends Document {
  name?: string;
  email?: string;
  phone?: string;
  source: 'website' | 'popup' | 'contact-form' | 'whatsapp' | 'phone' | 'calculator';
  type: 'form' | 'whatsapp' | 'phone' | 'popup';
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  message?: string;
  pageSource?: string;
  device?: string;
  createdAt: Date;
  updatedAt: Date;
}

const LeadSchema: Schema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    source: {
      type: String,
      enum: ['website', 'popup', 'contact-form', 'whatsapp', 'phone', 'calculator'],
      default: 'website',
    },
    type: {
      type: String,
      enum: ['form', 'whatsapp', 'phone', 'popup'],
      default: 'form',
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'qualified', 'converted', 'lost'],
      default: 'new',
    },
    message: {
      type: String,
      trim: true,
    },
    pageSource: {
      type: String,
      trim: true,
    },
    device: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);
