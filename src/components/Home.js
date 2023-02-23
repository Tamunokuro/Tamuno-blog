/* eslint-disable react/prop-types */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Blogs from './Blogs';
import headerimg from '../assets/sigmund.jpg';
import '../App.css';
import blogs from '../blog_data/data';
import Testimonial from './Testimonials/Testimonial';
import Footer from './Footer/Footer';

const Home = () => (
  <>
    <Container className="hero-section p-5" style={{ backgroundColor: '#faebd7', borderTopLeftRadius: '60px' }}>
      <Row>
        <Col>
          <div>
            <img
              src={headerimg}
              alt="Programmer"
              width="500"
              height="500"
              style={{ border: '1px solid #000000', boxShadow: '10px 10px' }}
            />
          </div>
        </Col>
        <Col className="pt-5">
          <h2>Join our mailing list to receive blog post notifcations </h2>
          <Box
            component="form"
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
            noValidate
            autoComplete="off"
          >
            <TextField fullWidth label="Email" variant="outlined" style={{ marginBottom: '1.2rem' }} />
            <TextField fullWidth label="Password" variant="outlined" style={{ marginBottom: '1.2rem' }} />
          </Box>
          <Button className="p-3" style={{ backgroundColor: 'var(--primary-color)', fontWeight: 'bold', width: 500 }} type="submit">
            Sign Up
          </Button>
        </Col>
      </Row>
    </Container>
    <div className="blogs--section pt-5">
      <div className="blogs--section--header">
        <div className="blogs--section--intro">
          <h3>Join various spaces and have fun!</h3>
          <h2 style={{ fontWeight: 900 }}>POPULAR BLOGS</h2>
        </div>
        <div className="blogs--section--items">
          <ul>
            <li className="blogs--section--item">Technology Blogs</li>
            <li className="blogs--section--item">Trending news</li>
          </ul>
          <div className="blogs--list">
            <Blogs blogs={blogs} />
          </div>
          <Button className="mt-3 p-3" variant="warning" style={{ fontSize: '20px', fontWeight: 'bold' }}>Explore blogs available</Button>
        </div>
      </div>
    </div>
    <Testimonial />
    <Footer />
  </>
);
export default Home;
