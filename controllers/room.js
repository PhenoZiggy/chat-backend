import Room from '../models/room';
import User from '../models/user'; // Make sure to import your User model
import Message from '../models/message';

export const createRoom = async (req, res) => {
  const { name, topic, userIds } = req.body;
  try {
    // Find the users based on their IDs
    const users = await User.find({ _id: { $in: userIds } });
    const userArray = users.map(user => user._id)
    const room = await Room.create({ name, topic, users : userArray });
    return res.status(201).json({ room });
  } catch (error) {
    return res.status(500).json({ message: 'Error while creating a room', error: error });
  }
};

export const getUserRooms = async (req, res) => {
    const { email } = req.body;
  
    try {
      // Find the user based on the provided email
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Find rooms where the user is a member
      const rooms = await Room.find({ 'users': user._id })
        .populate('users', '_id name username') // Populate the 'users' field
        .populate('messages', 'message_body created_at') // Populate the 'messages' field
        .exec();
  
      return res.status(200).json({ rooms });
    } catch (error) {
      return res.status(500).json({ message: 'Error while fetching rooms', error: error });
    }
  };

  export const getRoomMessagesAndUsers = async (req, res) => {
    const { room_id } = req.body;
  
    try {
      // Find the room based on the provided room_id
      const room = await Room.findById(room_id);
  
      if (!room) {
        return res.status(404).json({ message: 'Room not found' });
      }
  
      // Fetch messages for the room
      const messages = await Message.find({ room: room._id })
        .populate('user', '_id name username') // Populate the 'user' field
        .select('user message_body created_at')
        .exec();
  
      console.log('Fetched messages:', messages);
  
      return res.status(200).json({ messages });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Error while fetching messages and users', error: error });
    }
  };
  