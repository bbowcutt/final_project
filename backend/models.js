const mongoose = require('mongoose')

const PlaylistsPost = mongoose.model('playlistPost', {
    _id: mongoose.SchemaTypes.String,
    name: mongoose.SchemaTypes.String
});

const SongsPost = mongoose.model('songsPost', {
    _id: mongoose.SchemaTypes.String,
    name: mongoose.SchemaTypes.String,
    author: mongoose.SchemaTypes.String,
    genre: mongoose.SchemaTypes.String,
    playlist_id: mongoose.SchemaTypes.String
});

module.exports = {
    Playlist: PlaylistsPost,
    Song: SongsPost
}
