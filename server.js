const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.text());

// Endpoint to receive meeting notes from frontend
app.post('/meeting-notes', (req, res) => {
    const meetingNotes = req.body;
    console.log("Received meeting notes: " + meetingNotes);
    // Implement logic to process meeting notes
    res.send("Meeting notes received successfully");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
