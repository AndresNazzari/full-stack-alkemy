import express from 'express';
const router = express.Router();

//@route    POST api/users
//@desc     Register User
//@access   Public
router.post('/', async (req, res) => {
    res.send({ test: 'test' });
});

export { router as users };
