const express = require('express');
const cors = require('cors');
require('./server/config/mongoose.config');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/routes/pirates.routes')(app);
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );