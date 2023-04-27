const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 3001
const { Playlist, Song } = require('./models.js');
const playlistRouter = require('./routes/playlists.js'); 


app.use(cors());
app.use(express.json());


const dbUrl = 'mongodb://127.0.0.1:27017/playlists';
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to database!")
});


app.get('/', async(req, res) => {
    const playlists = await Playlist.find();
    res.send( playlists )
}); 



app.use('/playlists', playlistRouter); 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
