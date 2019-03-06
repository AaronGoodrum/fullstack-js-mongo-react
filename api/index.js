import express from 'express';
import data from '../src/testData';

const router = express.Router();

router.get('/USERS', (req, res) => {
  res.send({ USERS: data.USERS });
});

export default router;
