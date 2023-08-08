import express from 'express';
import { getpost,createPost } from '../controllers/posts.js';
const router = express.Router();

// all the posts ins not reached from localhost:5000/
//but are reached by http://localhost:5000/posts 

router.get('/', getpost);
router.get('/', createPost);

export default router; 