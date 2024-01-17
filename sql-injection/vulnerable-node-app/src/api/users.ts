import express from 'express';
import db, { rawDB } from '../db';

const router = express.Router();

type User = {
  username: string;
  email: string;
};

router.get<{}, User[]>('/', async (req, res, next) => {
  try {
    const { id } = req.query;
    if (!id) {
      throw new Error('Missing ID in query');
    }
    // const users = await db('users').where({ id }).first();
    // " OR 1=1; --select all users!
    // " OR 1=1; drop table users; --"drop all users!
    // Vulnerable!!
    const users = await db.raw(`select * from users where id = "${id}"`);
    // const users = await db.raw('select * from users where id = ?', [id]);
    // const users = await new Promise<User[]>((resolve, reject) => {
    //   rawDB.all(`select * from users where id = "${id}"`, (error, result) => {
    //     if (error) {
    //       return reject(error);
    //     }
    //     return resolve(result as User[]);
    //   });
    // });
    if (!users || !users.length) {
      res.status(404);
      throw new Error('Not Found');
    }
    res.json(users);
  } catch (error) {
    next(error);
  }
});

export default router;
