const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routers/home'));
app.use('/encrypt', require('./routers/encrypt'));
app.use('/decrypt', require('./routers/decrypt'));


app.listen(port, () => console.log(`Listening on port ${port}`));