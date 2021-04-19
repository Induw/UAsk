const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3000;
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const fetch = require('node-fetch');

app.use(cors());
app.use(express.json());

//  question asked
var question = '';

//  answer to be received from the model
var answer = '';

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
app.post('/api/ask/question', async(req, res) => {
    question = req.body.question;
    //res.status(200).json({answer: ans});
    console.log(question);
    // TODO: create an API at model and request with the question and return the response as the answer
    answer = await getAnswer();
    res.status(200).json({answer: answer})
});

//  Fetch method call to the API at the model
const getAnswer = () => {
    return fetch("http://192.168.1.2:8000/", {
    method: 'POST',
    body: JSON.stringify({
        question: question
    }),
    headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.text())
    .then(text => console.log(text))
}



app.listen(port, () => console.log(`Server is Running at port ${port}...`))
