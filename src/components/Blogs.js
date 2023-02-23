import React from 'react';
import PropTypes from 'prop-types';
import BlogItem from './BlogItem';
import '../App.css';

const Blogs = ({ blogs }) => (
  <div className="blogs--list">
    {blogs.map((blog) => (
      <BlogItem blog={blog} key={blog.id} />
    ))}
  </div>
);

Blogs.defaultProps = {
  blogs: null,
};

Blogs.propTypes = {
  blogs: PropTypes.instanceOf(Array),
};

export default Blogs;
