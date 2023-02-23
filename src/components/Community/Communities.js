import React from 'react';
import PropTypes from 'prop-types';
import CommunityItem from './CommunityItem';
import './style.css';

const Community = ({ communities }) => (
  <div className="communities--list">
    {communities.map((community) => (
      <CommunityItem community={community} key={community.id} />
    ))}
  </div>
);

Community.defaultProps = {
  communities: null,
};

Community.propTypes = {
  communities: PropTypes.instanceOf(Array),
};

export default Community;
