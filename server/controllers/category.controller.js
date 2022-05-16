import CategoryService from '../services/category.service.js';
import { validationResult } from 'express-validator';

export default class CategoryController {
    constructor() {
        this.categoryService = new CategoryService();

        this.createCategory = this.createCategory.bind(this);
        this.removeCategory = this.removeCategory.bind(this);
    }

    async createCategory(req, res) {
        //check if errors in validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { categoryName } = req.body;
        try {
            //check if category exists
            const queryResult = await this.userService.categoryExists(
                categoryName
            );
            if (queryResult.length > 0) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: 'Category already exists' }] });
            }

            //Add category to database
            await this.userService.addCategory(categoryName);
            res.status(200).json({
                errors: [{ msg: 'Category added' }],
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    }
    async removeCategory(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    }
}
