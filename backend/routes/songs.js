const {v4:uuid4} =require('uuid');
const express = require('express');
//import * as fs from 'node:fs/promises';
const {Song} =  require('../models.js'); 


const songRouter = express.Router({mergeParams: true}); 

songRouter.get('/', async (req, res) => {
    const songs = await Song.find({playlist_id: req.params.playlistId});
   // console.log("Here are the items", items); 
    res.send(songs);
  });

songRouter.get('/:songId', async (req, res) => {
    const playlistId = req.params.playlistId; //maybe ?? idk? 
    const songId = req.params.songId;
    try {
      const song = await Song.findOne({ "_id": songId });
      console.log(song);
      if (song === null) {
        res.status(404);
        res.json({
          status: 404,
          message: 'not found',
        });
        return;
      }
     
      res.json(song);
    } catch (e) {
      console.log(e);
      res.status(500);
      res.send('');
    }
  });


songRouter.post("/new", async (req, res) => {
    console.log(req.body);
    const requestBody = req.body;
    console.log(requestBody);
    requestBody._id = uuid4();

    try {
        const result = await new Song(requestBody).save();
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

 

module.exports = songRouter; 