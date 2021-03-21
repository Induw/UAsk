const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3000;
const multer = require('multer');
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.json());

//  question asked
var question = '';

//  answer to be received from the model
var ans = '';

//  setting storage engine -- file name and type etc
const storage = multer.diskStorage({
    destination: 'uploaded-image',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}${path.extname(file.originalname)}`)
    } 
});

//  init upload
const imageUpload = multer({
    storage: storage
})

// post image as json
app.post('/api/ask', imageUpload.single('image'), (req, res) => {
    console.log("Image Received!")
    res.status(200).send('POST request recieved...');
})

//  post question and get the answer as a response
app.post('/api/ask/question', (req, res) => {
    question = req.body.question;
    res.status(200).json({answer: ans});
    console.log(question);
    // TODO: create an API at model and request with the question and return the response as the answer
});

app.listen(port, () => console.log(`Server is Running at port ${port}...`))
