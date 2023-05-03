import React, { useState, useEffect } from 'react';

function Home() {
  const [featuredAlbums, setFeaturedAlbums] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recentlyPlayedAlbums, setRecentlyPlayedAlbums] = useState([]);

  useEffect(() => {
    // Fetch list of featured albums
    fetch("https://theaudiodb.com/api/v1/json/1/album.php?i=112024")
      .then((response) => response.json())
      .then((data) => {
        setFeaturedAlbums(data.album);
      })
      .catch((error) => console.log(error));

      fetch("https://theaudiodb.com/api/v1/json/1/genres.php")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.genres);
      })
      .catch((error) => console.log(error));

    // Fetch list of recently played albums
    fetch("https://theaudiodb.com/api/v1/json/1/searchalbum.php?s=coldplay")
      .then((response) => response.json())
      .then((data) => {
        setRecentlyPlayedAlbums(data.album);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="home">
      <section className="featured">
        <h2>Featured Albums</h2>
        <ul>
          {/* Map over the featured albums and render them as a list */}
          {featuredAlbums.map((album) => (
            <li key={album.idAlbum}>
              <img src={album.strAlbumThumb} alt={album.strAlbum} />
              <h3>{album.strAlbum}</h3>
              <p>{album.strArtist}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="categories">
        <h2>Categories</h2>
        <ul>
          {/* Map over the music categories and render them as a list */}
          {categories.map((category) => (
            <li key={category.idGenre}>
              <h3>{category.strGenre}</h3>
            </li>
          ))}
        </ul>
      </section>
      <section className="recently-played">
        <h2>Recently Played Albums</h2>
        <ul>
          {/* Map over the recently played albums and render them as a list */}
          {recentlyPlayedAlbums.map((album) => (
            <li key={album.idAlbum}>
              <img src={album.strAlbumThumb} alt={album.strAlbum} />
              <h3>{album.strAlbum}</h3>
              <p>{album.strArtist}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;
