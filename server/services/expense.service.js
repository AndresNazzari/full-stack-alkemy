import knex from 'knex';
import { configDb } from '../config/db_connection.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import gravatar from 'gravatar';

export default class UserService {
    constructor() {
        this.knex = knex(configDb);
    }

    async addExpense(req, res) {}
    async getExpenses(req, res) {}
    async updateExpense(req, res) {}
    async removeExpense(req, res) {}
}
