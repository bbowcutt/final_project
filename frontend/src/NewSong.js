import {useState} from 'react'
import { useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export async function getSongNew({ params }) {
    const response = await fetch(`http://localhost:3001/playlists/${params.playlistId}`,  {
        method: "GET",
        mode: 'cors', 
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const resp = await response.json(); 
    console.log("response", resp); 
    return resp;
  }

export default function CreateSong() {
    const playlistInfo = useParams();
    const song = useLoaderData(); 
    const nameChange = (event) => {
        inputProductName = event.target.value; 
    }; 
    const [inputProductName, setInputProductName] = useState('');
    const [inputProductQuantity, setInputProductQuantity] = useState('');
    const [inputProductPrice, setInputProductPrice] = useState('');


    async function handleSubmit(data) {
        //console.log(playlistInfo.playlistId); 

      const newProduct = {
        name: inputProductName,
        author: inputProductQuantity, 
        genre: inputProductPrice,
        playlist_id: playlistInfo.playlistId
      };
      console.log(newProduct); 
      console.log(JSON.stringify(newProduct)); 
      await fetch(`http://localhost:3001/playlists/${playlistInfo.playlistId}/songs/new`, {
        method: "POST",
        body: JSON.stringify(newProduct),
        mode: 'cors', 
        headers: {
            'Content-Type': 'application/json'
        }
      })
    }
  
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e.data); 
      }}>
        <input type="text" placeholder="Song name..." value={inputProductName} onChange={(e) => setInputProductName(e.target.value)} />
        <input type="text" placeholder="Song author..." value={inputProductQuantity} onChange={(e) => setInputProductQuantity(e.target.value)} />
        <input type="text" placeholder="Song genre..." value={inputProductPrice} onChange={(e) => setInputProductPrice(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    )
  }