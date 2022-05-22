import knex from 'knex';
import { configDb } from '../config/db_connection.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import gravatar from 'gravatar';

export default class UserService {
    constructor() {
        this.knex = knex(configDb);
    }

    async addExpense(concept, amount, category_id, user_id) {
        return await this.knex('expense').insert({
            concept,
            amount,
            date: new Date(),
            category_id,
            user_id,
        });
    }

    async getExpenses() {
        return await this.knex('expense').select('*');
    }

    async updateExpense(expense_id, concept, amount, category_id) {
        return await this.knex('expense')
            .update({
                concept,
                amount,
                category_id,
            })
            .where({ expense_id });
    }
    async removeExpense() {}
}
