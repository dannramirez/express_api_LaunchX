const express = require('express');

const app = express();
app.use(express.json());

const port = 3000;

app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL request ${ new Date()}`);
    const explorer1 = {
        id: 1,
        name: "Dann1"
    };
    const explorer2 = {
        id: 2,
        name: "Dann2"
    };
    const explorer3 = {
        id: 3,
        name: "Dann3"
    };
    const explorer4 = {
        id: 4,
        name: "Dann4"
    };
    const explorers = [explorer1, explorer2, explorer3, explorer4];

    res.status(200).json(explorers);
});

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET ALL request ${ new Date()}`);
    console.log(`Getting explorer with id ${req.params.id}`);
    const explorer = {
        id: 1,
        name: "Dann1"
    };
    res.status(200).json(explorer);
});

app.post('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL request ${ new Date()}`);
    const requestBody = req.body;
    console.log(requestBody);
    res.status(201).json({message: "Created"}); 
});

app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET ALL request ${ new Date()}`);
    console.log(`Update explorer with id ${req.params.id}`);
    const requestBody = req.body;
    console.log(requestBody);
    res.status(201).json({message: "Updated"}); 
});

app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET ALL request ${ new Date()}`);
    console.log(`Delete explorer with id ${req.params.id}`);
    res.status(201).json({message: "Deleted"}); 

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});