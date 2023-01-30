/* eslint-disable react/prop-types */
import '../App.css';
import React, { useState } from 'react';

const BlogItem = ({ page }) => {
  const [follow, setFollow] = useState('follow');

  const handleClick = () => {
    if (follow === 'follow') {
      setFollow('following');
    } else {
      setFollow('follow');
    }
  };
  return (
    <div className="blog-item">
      <h3>
        {' '}
        { page.title }
        {' '}
      </h3>
      <small>{ page.author }</small>
      <button type="button" className="btn btn-outline-secondary" onClick={handleClick}>{ follow }</button>
    </div>
  );
};

export default BlogItem;
