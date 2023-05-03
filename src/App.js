
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import MusicPlayer from './components/MusicPlayer';
import Search from './components/Search';
import './App.css';

function App() {
  
  

  

    

   
   
  
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
            <Route path="/" element={<Home />} />
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
