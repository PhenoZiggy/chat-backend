import mongoose from 'mongoose';
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
        type: String,
        required: true,
      },
    image: {
      type: JSON,
      required: true,
      default: {
        url: 'https://freesvg.org/img/Male-Avatar.png',
        name: 'default_profile_pic.png',
      },
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', userSchema);