import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('users').del();
  await knex('users').insert([
    { username: 'w3cj', email: 'cj@null.computer' },
    { username: 'hugo', email: 'hugo@hackerman.com' },
    { username: 'oksr', email: 'oksr@coolguy.org' },
  ]);
}
