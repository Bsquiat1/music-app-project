import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import MusicPlayer from './components/MusicPlayer'
import Search from './components/Search'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/search">Search</a></li>
            <li><a href="/music-player">MusicPlayer</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <BrowserRouter>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/music-player" component={MusicPlayer} />
          <Route path="/search" component={Search} />
        </Routes>
        </BrowserRouter>
      </main>
      <footer>
        <p>&copy; 2023 Skio Music App</p>
      </footer>
    </div>
  );
}

export default App;
