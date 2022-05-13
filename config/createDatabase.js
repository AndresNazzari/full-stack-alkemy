import knex from 'knex';
import { configDb } from './db_connection.js';

export const createDatabase = async () => {
    const db = knex(configDb);
    const databaseName = process.env.DB_NAME;

    try {
        await db.raw(`CREATE DATABASE IF NOT EXISTS ${databaseName}`);
        console.log(`Database created: ${databaseName}`);
    } catch (error) {
        console.log(error);
    } finally {
        await db.destroy();
    }
};
