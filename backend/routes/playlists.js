const {v4:uuid4} =require('uuid');
const express = require('express'); 
const playlistRouter = express.Router(); 
const {Playlist, Song} =  require('../models.js'); 
const songRouter = require('./songs.js'); 


playlistRouter.get('/', async (req, res) => {
    const playlists = await Playlist.find();
    res.send(playlists);
  });

playlistRouter.get('/:playlistId', async (req, res) => {

    const songs = await Playlist.findOne({ "_id": req.params.playlistId });
    console.log(songs);
    res.send(songs);
  });


playlistRouter.post("/new", async (req, res) => {
    const requestBody = req.body;
    console.log(requestBody); 
    requestBody._id = uuid4();
  
    try {
      const result = await new Playlist(requestBody).save();
      console.log(result);
      res.status(201);
      res.json({
        status: 201,
        message: 'created',
      });
    } catch (e) {
      console.log(e);
      res.status(500);
      res.json({
        status: 500,
        message: e,
      });
    }
  }); 

playlistRouter.use("/:playlistId/songs", songRouter);


module.exports = playlistRouter ; 