import UserService from '../services/user.service.js';
import { validationResult } from 'express-validator';

export default class UserController {
    constructor() {
        this.userService = new UserService();

        this.createUser = this.createUser.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.getUser = this.getUser.bind(this);
    }

    async createUser(req, res) {
        //check if errors in validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { name, email, password } = req.body;

        try {
            //check if user exists
            const queryResult = await this.userService.userExists(email);
            if (queryResult.length > 0) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: 'Email already registered' }] });
            }

            //Encrypt password
            const passwordEncrypted = await this.userService.encryptPassword(
                password
            );

            //Get users gravatar
            const avatar = await this.userService.getGravatar(email);

            //Add user to database
            await this.userService.addUser(
                name,
                email,
                avatar,
                passwordEncrypted
            );

            //Return jsonwebtoken
            const token = this.userService.generateToken(email);

            res.status(200).json({ token });
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    }

    async loginUser(req, res) {
        //check if errors in validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;

        try {
            //check if user exists
            const queryResult = await this.userService.userExists(email);
            if (queryResult.length == 0) {
                return res
                    .status(401)
                    .json({ errors: [{ msg: 'Invalid Credentials' }] });
            }

            //check if password is correct
            const isMatch = await this.userService.comparePassword(
                password,
                queryResult[0].password
            );
            if (!isMatch) {
                return res
                    .status(401)
                    .json({ errors: [{ msg: 'Invalid Credentials' }] });
            }
            //Return jsonwebtoken
            const token = this.userService.generateToken(queryResult[0].email);
            res.status(200).json({ token });
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    }

    async getUser(req, res) {
        try {
            const { user_id } = req.params;
            const user = await this.userService.getUser(user_id);
            res.status(200).json({ user: user[0] });
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    }
}
