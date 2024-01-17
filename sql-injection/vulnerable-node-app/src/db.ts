import dotenv from 'dotenv';
import knex from 'knex';
import sqlite3 from 'sqlite3';
import { config } from '../knexfile';

dotenv.config();

const sqlite = sqlite3.verbose();

// @ts-ignore
export const rawDB = new sqlite.Database(config[process.env.NODE_ENV].connection.filename);

// @ts-ignore
export default knex(config[process.env.NODE_ENV]);
