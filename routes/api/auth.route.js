import express from 'express';
const router = express.Router();

//@route    GET api/auth
//@desc     Get user by id
//@access   Public
router.get('/', async (req, res) => {
    res.send({ test: 'test' });
});

//@route    POST api/auth
//@desc     Authenticate user & get token
//@access   Public
router.post('/', async (req, res) => {
    res.send({ test: 'test' });
});

export { router as auth };
