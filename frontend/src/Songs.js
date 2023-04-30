import {Link, useLoaderData} from 'react-router-dom';

export default function Songs() {
  const songs = useLoaderData();
  
  return (
      <>
      <div>
        
        {songs.map(song => <Link key={song._id} to={`${song._id}`}><h1>{song.name}</h1></Link>)}
      </div>
    </>
  );
}

async function getSongs({ params }) {
    const response = await fetch(`http://localhost:3001/playlists/${params.playlistId}/songs`, {
     method: "GET",
     mode: 'cors',
     headers: {
         'Content-Type': 'application/json'
     }
   });


   return await response.json();
 }

 export { getSongs };
