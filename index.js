const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const feedbacks = [];

// test route
app.get("/", (req, res) => {
    res.send("Feedback backend is running");
}) 

app.post("/feedback", (req, res) => {
    const feedback = req.body;

    feedbacks.push(feedback);
    
    res.status(201).json({
        message: "Feedback added successfully",
    });
    

});



app.listen(PORT, () => {
    console.log("Server is running");
});