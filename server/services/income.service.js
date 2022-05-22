import knex from 'knex';
import { configDb } from '../config/db_connection.js';

export default class UserService {
    constructor() {
        this.knex = knex(configDb);
    }

    async addIncome(concept, amount, category_id, user_id) {
        return await this.knex('income').insert({
            concept,
            amount,
            date: new Date(),
            category_id,
            user_id,
        });
    }

    async getIncomes() {
        return await this.knex('income').select('*');
    }

    async updateIncome(income_id, concept, amount, category_id) {
        return await this.knex('income')
            .update({
                concept,
                amount,
                category_id,
            })
            .where({ income_id });
    }
    async removeIncome(income_id) {
        return await this.knex('income').where({ income_id }).del();
    }
}
