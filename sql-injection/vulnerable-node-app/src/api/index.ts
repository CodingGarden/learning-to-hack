import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import users from './users';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/users', users);

export default router;
