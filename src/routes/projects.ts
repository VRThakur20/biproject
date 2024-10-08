import express from 'express';
import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
  restoreProject,
} from '../controllers/projectController';
import authMiddleware from '../middleware/authMiddleware';


const router = express.Router();

router.post('/', authMiddleware(['ADMIN']), createProject);
router.get('/', authMiddleware(['ADMIN', 'MANAGER', 'EMPLOYEE']), getProjects);
router.get('/:id', authMiddleware(['ADMIN', 'MANAGER', 'EMPLOYEE']), getProjectById);
router.put('/:id', authMiddleware(['ADMIN']), updateProject);
router.delete('/:id', authMiddleware(['ADMIN']), deleteProject);
router.patch('/restore/:id', authMiddleware(['ADMIN']), restoreProject);

export default router;
