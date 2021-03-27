const express = require('express');
const app = express();
const port = 5000;
const fetch = require('node-fetch');
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

const url = 'https://reqres.in/api/users?page=2'

let users = [];
let userId = 13;

// Read in a list of users
app.get('/users', (req, res) => {
    // only add users once from the api
    if (users.length == 0) {
        fetch(url)
        .then(result => result.json())
        .then(jsonOb => {
            users=jsonOb.data;
            res.json(users);
        })
        .catch(err => console.log(err))
    } 
    else {
        res.json(users);
    }
});

// Add a new user to the JSON
app.post('/add', (req, res) => {
    const newUser = {...req.body, id: userId};
    userId++;
    users.push(newUser);
    res.json(newUser);
});

// Update a user in the JSON
app.post('/update', (req, res) => {
    const userId = req.body.id;
    let i = users.findIndex((user => user.id == userId));
    users[i] = req.body;
    res.json(users);
});

// Delete a user in the JSON
app.post('/delete', (req, res) => {
    users=users.filter(user => user.id !== req.body.id);
    res.json(users);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
