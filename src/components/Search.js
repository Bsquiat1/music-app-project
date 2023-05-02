import React, { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.audiomack.com/v1/search/songs?q=${query}`)
      .then((response) => response.json())
      .then((data) => setResults(data.results))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Search for Songs</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input type="text" value={query} onChange={handleChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      {results.length > 0 && (
        <ul>
          {results.map((song) => (
            <li key={song.id}>
              <a href={song.url}>
                <img src={song.artwork_url} alt={song.title} />
                <span>{song.title}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
