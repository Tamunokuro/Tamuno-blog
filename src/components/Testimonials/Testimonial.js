import React from 'react';
import { MdVerified } from 'react-icons/md';
import nicolas from './assets/nicholas-testimonial.jpg';
import ryoji from './assets/ryoji-testimonial.jpg';
import toa from './assets/toa-testimonial.jpg';
import './style.css';

const Testimonial = () => (
  <div className="testimonials">
    <div className="testimonials-header">
      <h1>Stories from community members</h1>
      <p>Read stories about what members of our communities have to say</p>
    </div>
    <div className="testimonial-stories">
      <article className="testimonial">
        <img
          src={nicolas}
          alt="Testimonial"
        />
        <div className="testimonial-detail">
          <MdVerified size={30} style={{ color: '#87ceeb' }} />
          <p>Joining the Tamuno community boosts your socail life</p>
        </div>
      </article>
      <article className="testimonial">
        <img
          src={ryoji}
          alt="Testimonial"
        />
        <div className="testimonial-detail">
          <MdVerified size={30} style={{ color: '#87ceeb' }} />
          <p>Excellent career networking</p>
        </div>
      </article>
      <article className="testimonial">
        <img
          src={toa}
          alt="Testimonial"
        />
        <div className="testimonial-detail">
          <MdVerified size={30} style={{ color: '#87ceeb' }} />
          <p>Fulfillment in career through our career pivot coaches</p>
        </div>
      </article>
    </div>
  </div>
);

export default Testimonial;
