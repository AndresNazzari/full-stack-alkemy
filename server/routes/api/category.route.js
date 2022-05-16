import express from 'express';
import CategoryController from '../../controllers/category.controller';
import { check } from 'express-validator';
import auth from '../../middleware/auth.middleware';

const router = express.Router();

export class CategoryRoute extends express.Router {
    constructor() {
        super();
        this.categoryController = new CategoryController();

        //@route    POST api/category
        //@desc     Create category
        //@access   Private
        this.post(
            '/',
            auth,
            [check('name', 'Name is Required').not().isEmpty()],
            this.categoryController.createCategory
        );

        //@route    DELETE api/category
        //@desc     Create category
        //@access   Private
        this.delete(
            '/',
            auth,
            [check('name', 'Name is Required').not().isEmpty()],
            this.categoryController.removeCategory
        );
    }
}
