import React from 'react';
import logo from './assets/logo.png';
import './style.css';

const Footer = () => (
  <section className="blog--footer">
    <div className="blog--footer-description">
      <div className="blog-footer-header">
        <img src={logo} width="40" height="40" alt="Logo" />
        <h3>Tamuno Blog</h3>
      </div>
      <p>The career boost needed in your career. </p>
      <div className="blog--footer-links">
        <div className="blog--footer-link-section-1">
          <h4>Company</h4>
          <h6>About</h6>
          <h6>Mailing List</h6>
        </div>
        <div className="blog--footer-link-section-2">
          <h4>Resources</h4>
          <h6>Blogs</h6>
          <h6>Communities</h6>
          <h6>Support Tamuno</h6>
        </div>
        <div className="blog--footer-link-section-3">
          <h4>Categories</h4>
          <h6>Technology</h6>
          <h6>Trending</h6>
        </div>

      </div>
    </div>
    <div className="blog-description-links">
      <h4>Address</h4>
      <h6>Kenton drive Edinburg</h6>
    </div>
  </section>
);

export default Footer;
