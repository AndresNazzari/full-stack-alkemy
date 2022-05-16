import express from 'express';
import knex from 'knex';

const router = express.Router();

//@route    GET /api/income/
//@desc
//@access   Public
router.get('/', async (req, res) => {
    res.send({ test: 'test' });
});

//@route    POST /api/income/
//@desc
//@access   Public
router.post('/', async (req, res) => {
    res.send({ test: 'test' });
});

export { router as income };
