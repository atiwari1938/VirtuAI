import express from 'express';
import { analyzeEthicalDecision } from '../controllers/analyzeController.js';

const router = express.Router();

router.post('/analyze', analyzeEthicalDecision);

export default router;
