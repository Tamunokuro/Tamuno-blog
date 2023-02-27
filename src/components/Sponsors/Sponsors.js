import React from 'react';
import { Wrapper, Sponsor, SponsorHeader } from './styles/sponsors';
import codecademiImg from '../../assets/codecademy.jpg';
import googleImg from '../../assets/google-img.png';
import nikeImg from '../../assets/nike-logo.png';
import paydayImg from '../../assets/PayDay-logo.png';
import starbuckImg from '../../assets/Starbucks-Logo.png';
import wordpressImg from '../../assets/wordpress.png';

const Sponsors = () => (
  <Sponsor>
    <SponsorHeader>Sponsors</SponsorHeader>
    <Wrapper>
      <img src={codecademiImg} alt="Codecademy logo" width="120" height="120" />
      <img src={googleImg} alt="Codecademy logo" width="120" height="120" />
      <img src={nikeImg} alt="Codecademy logo" width="120" height="120" />
      <img src={paydayImg} alt="Codecademy logo" width="120" height="120" />
      <img src={starbuckImg} alt="Codecademy logo" width="200" height="120" />
      <img src={wordpressImg} alt="Codecademy logo" width="120" height="120" />
    </Wrapper>
  </Sponsor>
);

export default Sponsors;
