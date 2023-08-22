import express from 'express';
import {registerUser } from '../controllers/user';

const router = express.Router();

router.post('/user', registerUser);

module.exports = router;