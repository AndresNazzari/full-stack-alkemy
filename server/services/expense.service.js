import knex from 'knex';
import { configDb } from '../config/db_connection.js';

export default class ExpenseService {
    constructor() {
        this.knex = knex(configDb);
    }

    async addExpense(concept, amount, date, category_id, user_id) {
        return await this.knex('expense').insert({
            concept,
            amount,
            date,
            category_id,
            user_id,
        });
    }

    async getExpenses() {
        return await this.knex('expense').select('*');
    }

    async updateExpense(expense_id, concept, amount, date, category_id) {
        return await this.knex('expense')
            .update({
                concept,
                amount,
                date,
                category_id,
            })
            .where({ expense_id });
    }
    async removeExpense(expense_id) {
        return await this.knex('expense').where({ expense_id }).del();
    }
}
