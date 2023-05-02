import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import MusicPlayer from './components/MusicPlayer';
import Search from './components/Search';
import './App.css';

function App() {
  
  const [featuredItems, setFeaturedItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recentlyPlayedItems, setRecentlyPlayedItems] = useState([]);

  useEffect(() => {
    // Fetch list of featured tracks
    fetch("https://theaudiodb.com/api/v1/json/1/track-top10.php")
      .then((response) => response.json())
      .then((data) => {
        setFeaturedItems(data.track);
      })
      .catch((error) => console.log(error));

    // Fetch list of genres
    fetch("https://theaudiodb.com/api/v1/json/1/genres.php")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.genres);
      })
      .catch((error) => console.log(error));

    // Fetch list of recently played tracks
    fetch("https://theaudiodb.com/api/v1/json/1/recenttracks.php")
      .then((response) => response.json())
      .then((data) => {
        setRecentlyPlayedItems(data.track);
      })
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/music-player">Music Player</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home featuredItems={featuredItems} categories={categories} recentlyPlayedItems={recentlyPlayedItems} />} />
            <Route path="/music-player" element={<MusicPlayer />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2023 Skio Music App</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
