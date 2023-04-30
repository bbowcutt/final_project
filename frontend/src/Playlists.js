import {Link, useLoaderData} from 'react-router-dom';

export default function Playlists() {
  const playlists = useLoaderData();
  return (
    <>
      <div>
        
        {playlists.map(playlist => <Link key={playlist._id} to={`${playlist._id}`}><h1>{playlist.name}</h1></Link>)}
      </div>
    </>
  );
}

async function fetchPlaylist() {
  const response = await fetch(`http://localhost:3001/playlists`, {
    method: "GET",
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    }
  });


  return await response.json();
}

export { fetchPlaylist };
