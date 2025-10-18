var express = require('express');
const path = require('path');
var app = express();
const security = require('./middleware/security');
const port = 5050;

app.use(security);
app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('/me');
});

app.use('/me', require('./routes/profileRoute'));

app.listen(port, function () {
    console.log(`Server running on port ${port}`);
});
