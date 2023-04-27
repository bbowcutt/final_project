import { Link, Outlet } from 'react-router-dom';

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
