require('dotenv').config();
const express = require('express');
const connectDB = require('./utils/db');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.json());

// Routes
app.use('/api/v1', bookRoutes);
app.use('/api/v1', userRoutes);

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
