import Message from '../models/message';
import User from '../models/user';
import Room from '../models/room';

export const createMessage = async (req, res) => {
  const { room_id, user_id, message_body } = req.body;

  try {
    const message = await Message.create({
      room: room_id,
      user: user_id,
      message_body: message_body
    });
    return res.status(201).json({ message });
  } catch (error) {
    return res.status(500).json({ message: 'Error while creating a message', error: error });
  }
};
