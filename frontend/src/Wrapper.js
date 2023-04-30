import { Link, Outlet } from 'react-router-dom';
import './Wrapper.css'; 

export default function Wrapper() {
  return (
    <>
      <header>
        <Link to="/playlists">View all playlists</Link>
      </header>
      <header>
        <Link to="/playlists/new">Add new playlist</Link>
      </header>
    

      <Outlet />
    </>
  );
}
