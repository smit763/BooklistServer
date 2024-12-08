require('dotenv').config();
const express = require('express');
const cors = require("cors")
const connectDB = require('./utils/db');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.json());


app.use('/api/v1', bookRoutes);
app.use('/api/v1', userRoutes);

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
