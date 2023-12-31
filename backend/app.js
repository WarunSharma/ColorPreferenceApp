const express = require('express');
require('./src/db/connect')
const { createOrUpdateUserPreference, getUserPreference } = require('./src/controllers/userpreference');
const cors = require('cors');
const app = express();
const port = process.env.port || 3000;

// CORS applied
app.use(cors({
    origin: 'https://649251e76244cd08dd16eb31--elaborate-churros-8dc5dd.netlify.app/'
}));

app.use(express.json());

// Routes
app.get("/preference/:username", getUserPreference)
app.post("/preference", createOrUpdateUserPreference)

app.use((req, res) => {
    res.status(200).json({});
});

app.listen(port, ()=>{
    console.log("application running on port " + port);
})
