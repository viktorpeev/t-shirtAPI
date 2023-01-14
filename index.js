const express = require('express');
const app = express();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`Its alive on port ${PORT}`)
);

app.use(express.json())

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: '👕',
        size: 'large'
    })
});

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ Message: 'We need a logo!' })
    }

    res.send({
        tshirt: `👕 with your ${logo} and ${id}`
    })
});