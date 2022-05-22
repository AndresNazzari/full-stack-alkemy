import IncomeService from '../services/income.service.js';
import { validationResult } from 'express-validator';

export default class IncomeController {
    constructor() {
        this.incomeService = new IncomeService();

        this.addIncome = this.addIncome.bind(this);
        this.getIncomes = this.getIncomes.bind(this);
        this.updateIncome = this.updateIncome.bind(this);
        this.removeIncome = this.removeIncome.bind(this);
    }

    async addIncome(req, res) {
        //check if errors in validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { concept, amount, category_id, user_id } = req.body;
        try {
            await this.incomeService.addIncome(
                concept,
                amount,
                category_id,
                user_id
            );

            res.status(200).json({ msg: 'Income created' });
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    }

    async getIncomes(req, res) {
        try {
            const Incomes = await this.incomeService.getIncomes();
            res.status(200).json({ Incomes });
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    }

    async updateIncome(req, res) {
        //check if errors in validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { concept, amount, category_id } = req.body;
        const { income_id } = req.params;
        try {
            await this.incomeService.updateIncome(
                income_id,
                concept,
                amount,
                category_id
            );

            res.status(200).json({ msg: 'Income updated' });
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    }

    async removeIncome(req, res) {
        const { income_id } = req.params;

        try {
            await this.incomeService.removeIncome(income_id);
            res.status(200).json({ msg: 'Income removed' });
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    }
}
