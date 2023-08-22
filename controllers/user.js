import User from '../models/user';
import bcrypt from 'bcrypt';
require('dotenv').config();

export const registerUser = async (req, res) => {
  const { email, name , username } = req.body;

  const duplicateCheck = await User.find({ email: email })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return res.status(500).json({ message: 'Error while searching for a user', error: error });
    });

  if (duplicateCheck.length) {
    res.status(409).json({ message: 'already have a user' });
  } else {
    await User.create({ email: email, name: name , username : username })
      .then((result) => {
        return res.status(200).json({ result });
      })
      .catch((error) => {
        return res.status(500).json({ message: 'Error while creating a user', error: error });
      });
  }
};