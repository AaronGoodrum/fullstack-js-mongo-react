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

router.get('/USERS/:userId', (req, res) => {
  let USER = USERS[req.params.userId]
  USER.catchPhrase = 'Lorem Testing'

  res.send({ USER });
});

export default router;
