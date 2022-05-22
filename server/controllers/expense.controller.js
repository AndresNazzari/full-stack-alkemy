import ExpenseService from '../services/expense.service.js';
import { validationResult } from 'express-validator';

export default class CategoryController {
    constructor() {
        this.expenseService = new ExpenseService();

        this.addExpense = this.addExpense.bind(this);
        this.getExpenses = this.getExpenses.bind(this);
        this.updateExpense = this.updateExpense.bind(this);
        this.removeExpense = this.removeExpense.bind(this);
    }

    async addExpense(req, res) {}
    async getExpenses(req, res) {}
    async updateExpense(req, res) {}
    async removeExpense(req, res) {}
}
