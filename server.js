const { assertBooleanLiteral } = require('@babel/types');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());




// default response for any other request(not found) catch all 
app.use((req, res) => {
    res.status(404).end();
})


// will start express server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});