const express = require('express');
const path = require('path');
const port = process.env.PORT || 3020;
const app = express();
const multer = require('multer');
const fs = require('fs');
require('dotenv').config();
const { spawn } = require('child_process');


app.set('port', port)
const upload = multer({ dest: 'temporary/' });

app.post('/remove', upload.single('img'), (req, res) => {
    // console.log(req);
    const inputPath = req.file.path;
    // file.filename = auto generated by multer
    const outputPath = `processed/${req.file.filename}.png`;

    const python = spawn(process.env.PATH, ['python/removeBg.py', inputPath, outputPath]);
    
    python.stderr.on('data', (data) => {
        console.error(`Python stderr: ${data}`);
    });

    python.on('close', (code) => {
        if (code === 0) {
            res.sendFile(path.resolve(outputPath), () => {
                // remove temporary files (sync)
                fs.unlinkSync(inputPath);
                fs.unlinkSync(outputPath);
            });
        } else {
            res.status(500).send('failed to remove the background');
        }
    });

    python.on('error', (error) => {
        // console.log(error);
        res.status(500).send('internal err')
    })



})

app.use((req, res) => {
    console.log('app working');
    res.send('connected');
})

app.listen(app.settings.port, '0.0.0.0', () => {
    console.log('App working on ', app.settings.port);
});