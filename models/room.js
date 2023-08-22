import mongoose from 'mongoose';
const { Schema } = mongoose;
const roomSchema = new Schema(
  {
    name: {
      type: String, lowercase: true, unique: true
    },
    topic: {
      type: String
    },
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }],

    messages: {
      messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
    },
    created_at: Date,
    updated_at: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Room', roomSchema);