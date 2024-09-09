import express from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  restoreUser
} from '../controllers/userController';
import authMiddleware from '../middleware/authMiddleware';
import { assignRoleToUser, revokeRoleFromUser } from '../controllers/roleController';

import { createUserValidation, updateUserValidation, getUserByIdValidation } from '../validation/userValidation'; // Adjust the import path

const router = express.Router();

router.post('/', authMiddleware(['ADMIN']), createUser);
router.get('/', authMiddleware(['ADMIN', 'MANAGER']), getUsers);
router.get('/:id', authMiddleware(['ADMIN', 'MANAGER', 'EMPLOYEE']), getUserById);
router.put('/:id', authMiddleware(['ADMIN']), updateUser);
router.delete('/:id', authMiddleware(['ADMIN']), deleteUser);
router.patch('/restore/:id', authMiddleware(['ADMIN']), restoreUser);
router.post('/:id/assign-role', authMiddleware(['ADMIN']), assignRoleToUser);
router.post('/:id/revoke-role', authMiddleware(['ADMIN']), revokeRoleFromUser);

export default router;
