import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Wrapper from './Wrapper';
import Playlists, { fetchPlaylist } from './Playlists';
import SinglePlaylist, { getPlaylist } from './SinglePlaylist.js';
import CreateProduct from './NewPlaylist.js'; 
import Songs, { getSongs } from './Songs';

//import SingleSong, { getPlaylist } from './SinglePlaylist.js';
import CreateSong, {getSongNew} from './NewSong.js'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
        children: [
            {
                path: "/playlists",
                loader: fetchPlaylist,
                element: <Playlists />,
            },
            {
                path: "/playlists/:playlistId",
                loader: getPlaylist,
                element: (
                    <SinglePlaylist />
                ),
            },
            {
                path: "/playlists/new",
                element: (
                    <CreateProduct />
                ),
            },
            {
                path: "/playlists/:playlistsId/songs/:songId",
                loader: getPlaylist,
                element: (
                    <SinglePlaylist />
                ),
            },
            {
                path: "/playlists/:playlistId/songs/new",
                loader: null,
                element: (
                    <CreateSong />
                ),
            },
            {
                path: "/playlists/:playlistId/songs",
                loader: getSongs,
                element: (
                    <Songs />
                ),
            }
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
