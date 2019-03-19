import express from 'express';
import data from '../src/testData';

const router = express.Router();
// set user data as object
const USERS = data.USERS.reduce((obj, user) =>{
  obj[user.id] = user;
  return obj;
}, {});

router.get('/USERS', (req, res) => {
  res.send({ USERS: USERS });
});

export default router;
