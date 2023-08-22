import express from 'express';
import {createRoom , getUserRooms , getRoomMessagesAndUsers} from '../controllers/room';

const router = express.Router();

router.post('/room', createRoom);
router.post('/getUserRooms', getUserRooms);
router.post('/getroomandmessage', getRoomMessagesAndUsers);

module.exports = router;