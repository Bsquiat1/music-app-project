import React, { useState, useEffect } from 'react';

function Home({ featuredItems, categories, recentlyPlayedItems }) {
  return (
    <div className="home">
      <section className="featured">
        <h2>Featured Items</h2>
        <ul>
          {/* Map over the featured items and render them as a list */}
          {featuredItems.map((item) => (
            <li key={item.key}>
              <img src={item.pictures.large} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.username}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="categories">
        <h2>Categories</h2>
        <ul>
          {/* Map over the categories and render them as a list */}
          {categories.map((category) => (
            <li key={category.id}>
              <img src={category.pictures.large} alt={category.name} />
              <h3>{category.name}</h3>
            </li>
          ))}
        </ul>
      </section>
      <section className="recently-played">
        <h2>Recently Played</h2>
        <ul>
          {/* Map over the recently played items and render them as a list */}
          {recentlyPlayedItems.map((item) => (
            <li key={item.key}>
              <img src={item.pictures.large} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.username}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;
