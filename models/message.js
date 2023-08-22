import mongoose from 'mongoose';
const { Schema } = mongoose;
const messageSchema = new Schema(
  {
    room: { type: Schema.Types.ObjectId, ref: 'Room' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    message_body: {
      type :String
    },
    message_status: {
     type : Boolean,
     default : false
    },
    created_at: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Message', messageSchema);