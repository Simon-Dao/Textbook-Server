const express = require('express');
const { url } = require('inspector');
const path = require('path');
const members = require('./Members');
const app = express();
const logger = require('./middleware/logger');
const fs = require('fs');
const bookPath = 'C:\\Users\\Gamer\\Desktop\\Web stuff\\TextBook server\\book';

app.use(logger);

const PORT = 80;
let currentVolume = 'volume1';

app.get('/api/current-volume', (req, res) => {
    res.json({'current':currentVolume});
});

app.get('/api/volumes', (req, res) => {

    let volumes = fs.readdirSync(bookPath);
    volumes.sort();

    res.json(volumes);
});

app.get('/api/:volume/chaptors', (req,res) => {

    let chaptors = fs.readdirSync(bookPath+"\\"+req.params.volume);
    chaptors.sort();

    res.json(chaptors);
}); 

app.get('/volume&:volume', (req, res) => {
    currentVolume = req.params.volume;
    res.sendFile(path.join(__dirname,'public','chaptors.html'));
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','home.html'));
});

app.get('/history/:volume&:chaptor', (req, res) => {
    var volume = req.params.volume;
    var chaptor = req.params.chaptor;
    
    res.sendFile(path.join(bookPath+'\\'+volume, chaptor));
})

//set
app.use(express.static(path.join(__dirname,'public')));

app.listen(PORT, () => console.log('Server is starting up! Listen on port '+PORT));