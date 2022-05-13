import express from 'express';
import { expense } from './routes/api/expense.route.js';
import { income } from './routes/api/income.route.js';
import { auth } from './routes/api/auth.route.js';
import { users } from './routes/api/users.route.js';
import { createTables } from './config/createTables.js';
import { createDatabase } from './config/createDatabase.js';
import dotenv from 'dotenv';

dotenv.config({ path: `./.env` });
const app = express();
const PORT = process.env.PORT || 8080;

await createDatabase();
await createTables();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//define routes
app.use('/api/income', income);
app.use('/api/outcome', expense);
app.use('/api/auth', auth);
app.use('/api/users', users);

app.all('*', function (req, res) {
    res.send({ error: `route ${req.path} and method ${req.method} undefined` });
});

//Serve static assters in production
if (process.env.NODE_ENV === 'production') {
    //Set Static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const server = app.listen(PORT, () => {
    console.log(`Server started on port  ${server.address().port}`);
});
server.on('error', (error) => console.log(`Error on server ${error}`));
