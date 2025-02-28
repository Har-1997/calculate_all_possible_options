require("dotenv").config();
const express = require('express');
const allRoutes = require('./routes');
const { PORT } = process.env;

const app = express();
app.use(express.json());

app.use('/', allRoutes);
// app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
