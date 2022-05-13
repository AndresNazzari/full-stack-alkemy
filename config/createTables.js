import knex from 'knex';
import { configDb } from './db_connection.js';

export const createTables = async () => {
    const databaseName = process.env.DB_NAME;
    const dbTables = ['income', 'expense', 'categories', 'users'];

    configDb.connection.database = databaseName;

    const db = knex(configDb);

    try {
        //crea tabla categories
        let hasTable = await db.schema.hasTable(dbTables[2]);
        if (!hasTable) {
            await db.schema.createTable(dbTables[2], (table) => {
                table.increments('category_id');
                table.string('category');
                table.string('created_at');
            });
            console.log(`Table created: ${dbTables[2]}`);
        } else {
            console.log(`Ya existe la tabla ${dbTables[2]}`);
        }
        // //crea tabla users
        hasTable = await db.schema.hasTable(dbTables[3]);
        if (!hasTable) {
            await db.schema.createTable(dbTables[3], (table) => {
                table.increments('user_id');
                table.string('email');
                table.string('password');
                table.string('created_at');
            });
            console.log(`Table created: ${dbTables[3]}`);
        } else {
            console.log(`Ya existe la tabla ${dbTables[3]}`);
        }
        //crea tabla income
        hasTable = await db.schema.hasTable(dbTables[0]);
        if (!hasTable) {
            await db.schema.createTable(dbTables[0], (table) => {
                table.increments('indome_id');
                table.string('concept');
                table.string('amount');
                table.string('date');
                table
                    .integer('category_id')
                    .references('category_id')
                    .inTable(dbTables[2]);
                table
                    .integer('user_id')
                    .references('user_id')
                    .inTable(dbTables[3]);
            });
            console.log(`Table created: ${dbTables[0]}`);
        } else {
            console.log(`Ya existe la tabla ${dbTables[0]}`);
        }
        //crea tabla expenses
        hasTable = await db.schema.hasTable(dbTables[1]);
        if (!hasTable) {
            await db.schema.createTable(dbTables[1], (table) => {
                table.increments('expense_id');
                table.string('concept');
                table.string('amount');
                table.string('date');
                table
                    .integer('category_id')
                    .references('category_id')
                    .inTable(dbTables[2]);
                table
                    .integer('user_id')
                    .references('user_id')
                    .inTable(dbTables[3]);
            });
            console.log(`Table created: ${dbTables[1]}`);
        } else {
            console.log(`Ya existe la tabla ${dbTables[1]}`);
        }

        await db.destroy();
    } catch (error) {
        console.log(error);
    }
};
