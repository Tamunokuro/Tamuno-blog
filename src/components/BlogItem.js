/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import '../App.css';

const BlogItem = ({
  blog: {
    id, category, blogTitle, duration,
  },
}) => (
  <div className="blog">
    <p className="category">{category}</p>
    <h4>{blogTitle}</h4>
    <span>{duration}</span>
    <div className="blog-tools">
      <AvatarGroup total={24}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
      <Link to={`/blog/${id}`}>Read more</Link>
    </div>
  </div>
);

export default BlogItem;
