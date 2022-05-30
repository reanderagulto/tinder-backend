import express from 'express'
import mongoose from 'mongoose'
// 1:36:05

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connectionUrl = 'mongodb+srv://admin:tVjmrXzZjQ3s9Crb@cluster0.yuovv.mongodb.net/tinder-clone';

// Middleware

// DB Config
mongoose.connect(connectionUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

// API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello Clever Programmers!!!"));

// Listener
app.listen(port, () => console.log(`listening on localhost:${port}`));