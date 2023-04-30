import { useLoaderData } from "react-router-dom";
import './SingleSong.css'

export async function getSong({ params }) {
  const response = await fetch(`http://localhost:3001/playlists/${params.playlistId}/songs/${params.songId}`);
  return await response.json();
}

export default function SingleSong() {
  const song = useLoaderData();

  return (
    <div>
      <h1>name: {song.name}</h1>
      <h2>author: {song.author}</h2>
      <h2>genre: {song.genre}</h2>

    </div>
  );
}