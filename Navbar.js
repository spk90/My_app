import React, { useEffect, useState } from 'react';
import './Navbar.css';
import axios from 'axios';

// NewsFeedSidebar component
function NewsFeedSidebar() {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    axios
      .get('https://newsapi.org/v2/top-headlines?country=in&apiKey=628d49ae31844931a6251d0713ad448f')
      .then((response) => setNewsArticles(response.data.articles))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="sidebar">
      <h4>News</h4>
      <ul>
        {newsArticles.map((article) => (
          <li key={article.title}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

// Navbar component
function Navbar() {
  return (
    <>
      

      

      

      {/* Render NewsFeedSidebar component */}
      <NewsFeedSidebar />

      
    </>
  );
}

// Export both Navbar and NewsFeedSidebar functions
export { Navbar, NewsFeedSidebar };
