import express from 'express';
import {
  login,
  signup,
  registerUser,
} from '../controllers/authController';
import authMiddleware from '../middleware/authMiddleware';


const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.post('/register', authMiddleware(['ADMIN']), registerUser);

export default router;
