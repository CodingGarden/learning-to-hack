import type { Knex } from 'knex';

export const config: { [key: string]: Knex.Config } = {
  development: {
    debug: true,
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3',
    },
  },
};

export default config;
