import express from 'express';
import {createMessage  } from '../controllers/message';

const router = express.Router();

router.post('/message', createMessage);

module.exports = router;