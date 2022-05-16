import knex from 'knex';
import { configDb } from './db_connection.js';

export const createTables = async () => {
    const databaseName = process.env.DB_NAME;
    configDb.connection.database = databaseName;
    const db = knex(configDb);

    try {
        //crea tabla categories
        let hasTable = await db.schema.hasTable('categories');
        if (!hasTable) {
            await db.schema.createTable('categories', (table) => {
                table.increments('category_id');
                table.string('name');
                table.string('created_at');
            });
            console.log(`📄 Table created: ${'categories'}`);
        } else {
            console.log(`📄 ${'categories'} table already exists`);
        }
        // //crea tabla users
        hasTable = await db.schema.hasTable('users');
        if (!hasTable) {
            await db.schema.createTable('users', (table) => {
                table.increments('user_id');
                table.string('name');
                table.string('email').unique();
                table.string('avatar');
                table.string('password');
                table.string('created_at');
            });
            console.log(`📄 Table created: ${'users'}`);
        } else {
            console.log(`📄 ${'users'} table already exists`);
        }
        //crea tabla income
        hasTable = await db.schema.hasTable('income');
        if (!hasTable) {
            await db.schema.createTable('income', (table) => {
                table.increments('income_id');
                table.string('concept');
                table.string('amount');
                table.string('date');
                table
                    .integer('category_id', 10)
                    .notNullable()
                    .unsigned()
                    .references('category_id')
                    .inTable('categories');
                table
                    .integer('user_id', 10)
                    .notNullable()
                    .unsigned()
                    .references('user_id')
                    .inTable('users');
            });
            console.log(`📄 Table created: ${'income'}`);
        } else {
            console.log(`📄 ${'income'} table already exists`);
        }
        //crea tabla expenses
        hasTable = await db.schema.hasTable('expense');
        if (!hasTable) {
            await db.schema.createTable('expense', (table) => {
                table.increments('expense_id');
                table.string('concept');
                table.string('amount');
                table.string('date');
                table
                    .integer('category_id', 10)
                    .notNullable()
                    .unsigned()
                    .references('category_id')
                    .inTable('categories');
                table
                    .integer('user_id', 10)
                    .notNullable()
                    .unsigned()
                    .references('user_id')
                    .inTable('users');
            });
            console.log(`📄 Table created: ${'expense'}`);
        } else {
            console.log(`📄 ${'expense'} table already exists`);
        }

        await db.destroy();
    } catch (error) {
        console.log(error);
    }
};
