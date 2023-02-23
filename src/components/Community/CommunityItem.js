/* eslint-disable react/prop-types */
import React from 'react';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import Button from 'react-bootstrap/Button';
import './style.css';

const CommunityItem = ({ community: { id, category } }) => (
  <div className="community-items">
    <div className="community-item" key={id}>
      <h3>{category}</h3>
      <AvatarGroup total={24}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
      <Button variant="primary">Join Community</Button>
    </div>
  </div>
);

export default CommunityItem;
