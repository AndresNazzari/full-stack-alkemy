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

    async addExpense(req, res) {
        //check if errors in validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { concept, amount, category_id, user_id } = req.body;
        try {
            await this.expenseService.addExpense(
                concept,
                amount,
                category_id,
                user_id
            );

            res.status(200).json({ msg: 'Expense created' });
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    }

    async getExpenses(req, res) {
        try {
            const expenses = await this.expenseService.getExpenses();
            res.status(200).json({ expenses });
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    }

    async updateExpense(req, res) {
        //check if errors in validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { concept, amount, category_id } = req.body;
        const { expense_id } = req.params;
        try {
            await this.expenseService.updateExpense(
                expense_id,
                concept,
                amount,
                category_id
            );

            res.status(200).json({ msg: 'Expense updated' });
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    }

    async removeExpense(req, res) {}
}
