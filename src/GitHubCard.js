
import React from 'react';
import Card from 'react-bootstrap/Card';

const GitHubCard = () => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src="your_profile_photo_url.jpg"
        alt="Your Profile"
      />
      <Card.Body>
        <Card.Title>Your GitHub Username</Card.Title>
        <Card.Text>
          A blurb about you and your GitHub activities.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GitHubCard;