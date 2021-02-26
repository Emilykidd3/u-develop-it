const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();
const db = require('./db/database');

const candidateRoutes = require('./routes/candidateRoutes');
const partyRoutes = require('./routes/partyRoutes');
const voterRoutes = require('./routes/voterRoutes');
const voteRoutes = require('./routes/voteRoutes');


app.use('/api', candidateRoutes);
app.use('/api', partyRoutes);
app.use('/api', voterRoutes);
app.use('/api', voteRoutes);

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// default response for any other request(not found) catch all 
app.use((req, res) => {
    res.status(404).end();
})

// will start express server on port 3001
// start server after db connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    });
});