const mongoose = require('mongoose')

const PlaylistsPost = mongoose.model('playlistPost', {
    _id: mongoose.SchemaTypes.String,
    name: mongoose.SchemaTypes.String
});

const SongsPost = mongoose.model('songsPost', {
    _id: mongoose.SchemaTypes.String,
    name: mongoose.SchemaTypes.String,
    quantity: mongoose.SchemaTypes.Number,
    price: mongoose.SchemaTypes.Number,
    store_id: mongoose.SchemaTypes.String
});

module.exports = {
    Playlist: PlaylistsPost,
    Song: SongsPost
}
