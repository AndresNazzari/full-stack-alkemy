import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(PORT, () => {
    console.log(`Servidor http listening in port  ${server.address().port}`);
});
server.on('error', (error) => console.log(`Error on server ${error}`));

app.all('*', function (req, res) {
    res.send({ error: `route ${req.path} and method ${req.method} undefined` });
});
