import React from 'react';

function Home() {
  return (
    <div>
      <h1>Welcome to Skio Music App</h1>
      <p>Discover the latest music and enjoy high-quality audio streaming with Skio.</p>
      <h2>Featured Playlists</h2>
      <ul>
        <li>
          <a href="/music-player">
            <img src="https://via.placeholder.com/150x150.png?text=Playlist+1" alt="Playlist 1" />
            <span>Playlist 1</span>
          </a>
        </li>
        <li>
          <a href="/music-player">
            <img src="https://via.placeholder.com/150x150.png?text=Playlist+2" alt="Playlist 2" />
            <span>Playlist 2</span>
          </a>
        </li>
        <li>
          <a href="/music-player">
            <img src="https://via.placeholder.com/150x150.png?text=Playlist+3" alt="Playlist 3" />
            <span>Playlist 3</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Home;
