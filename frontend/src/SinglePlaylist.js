import {Link, useLoaderData} from 'react-router-dom';
import './SinglePlaylist.css';

export async function getPlaylist({ params }) {
  const response = await fetch(`http://localhost:3001/playlists/${params.playlistId}`)

  const check =  await response.json();
  //console.log(check); 
  return check; 

}

export default function SinglePlaylist() {
  const playlist = useLoaderData();


  return (
      <div>
      <header>
              <Link to={`/playlists/${playlist._id}/songs`}>View Songs</Link>
      </header>
      <header>
              <Link to={`/playlists/${playlist._id}/songs/new`}>Add New Song</Link>
      </header>
      <h1>name: {playlist.name}</h1>
    
      
    </div>
  );
}
