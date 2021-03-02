const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3000;
const multer = require('multer');
const path = require('path');


//  setting storage engine -- file name and type etc
const storage = multer.diskStorage({
    destination: 'upload',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}${path.extname(file.originalname)}`)
    } 
});

//  init upload
const imageUpload = multer({
    storage: storage
})

// post image and question as json
app.post('/api/ask', imageUpload.single('image'), (req, res) => {
    console.log(req.file);
})

app.listen(port, () => console.log(`Server is Running at port ${port}...`))
