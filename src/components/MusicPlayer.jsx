import React, { useState, useEffect } from 'react';

function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Fetch the data from the Audiomack API
    fetch('https://www.audiomack.com/data-api/v1/playlists/1')
      .then(response => response.json())
      .then(data => {
        // Set the current track to the first track in the playlist
        setCurrentTrack(data.tracks[0]);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  }

  const handleNextTrack = () => {
    // Find the index of the current track
    const currentIndex = currentTrack.playlist_index - 1;
    // Set the current track to the next track in the playlist
    setCurrentTrack(currentTrack.playlist.tracks[currentIndex + 1]);
    setIsPlaying(true);
  }

  const handlePrevTrack = () => {
    // Find the index of the current track
    const currentIndex = currentTrack.playlist_index - 1;
    // Set the current track to the previous track in the playlist
    setCurrentTrack(currentTrack.playlist.tracks[currentIndex - 1]);
    setIsPlaying(true);
  }

  return (
    <div>
      <h1>{currentTrack.title}</h1>
      <audio src={currentTrack.url} controls autoPlay={isPlaying} onTimeUpdate={e => setCurrentTime(e.target.currentTime)} />
      <div>
        <button onClick={handlePrevTrack}>Previous</button>
        <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={handleNextTrack}>Next</button>
      </div>
      <p>Current time: {currentTime}</p>
    </div>
  );
}

export default MusicPlayer;
