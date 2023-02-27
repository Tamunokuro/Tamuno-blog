import styled from 'styled-components';

const sizes = {
  mobile: '500px',
};

export const devices = {
  mobile: `(max-width: ${sizes.mobile})`,
};

export const Sponsor = styled.section`
  background-color: #f5f5f5;
  padding: 3rem;
  width: 100vw;
  @media ${devices.mobile}{
    width: 150vw;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const SponsorHeader = styled.h1`
  display: block;
  text-align: center;
`;
