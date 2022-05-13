import express from 'express';
const router = express.Router();

//@route    GET /api/expense/
//@desc
//@access   Public
router.get('/', async (req, res) => {
    res.send({ test: 'test' });
});

export { router as expense };
