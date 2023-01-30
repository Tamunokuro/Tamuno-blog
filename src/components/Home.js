/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Blogs from './Blogs';

const Home = () => {
  const [pages, setPage] = useState([
    { title: 'Pastor EA Adeboye Devotional Guide', author: 'Pastor EA Adeboye', id: 1 },
    { title: 'Release of new naira note', author: 'CBN', id: 2 },
    { title: 'FinTech Startups in Nigeria', author: 'techCabal', id: 3 },
  ]);
  return (
    <>
      <Blogs pages={pages} />
    </>
  );
};

export default Home;
