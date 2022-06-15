import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card className='movie-view'>
        <Card.Img className="movie-poster" variant='top' src={movie.ImagePath} />
        <Card.Body>
          <Card.Text className="movie-title">Title:</Card.Text>
          <Card.Title className="text-center movie-title">{movie.Title}</Card.Title>
          <Card.Text className="movie-description">Description:</Card.Text>
          <Card.Text className="text-center movie-description">{movie.Description}</Card.Text>

          <Button onClick={() => { onBackClick(null); }} variant='link'>Back</Button>
        </Card.Body>
      </Card>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    ImagePath: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string,
      Description: PropTypes.string
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string,
      Bio: PropTypes.string,
      Birthday: PropTypes.instanceOf(Date),
      DeathYear: PropTypes.instanceOf(Date)
    }),    
    Actors: PropTypes.arrayOf(PropTypes.string),
    Featured: PropTypes.bool
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};