/* eslint-disable react/prop-types */
import React from 'react';
import BlogItem from './BlogItem';

const Blogs = ({ pages }) => (
  <div className="blog-list">
    <h3>Follow our blogs</h3>
    {pages.map((page) => (
      <BlogItem page={page} key={page.id} />
    ))}
  </div>
);

export default Blogs;
