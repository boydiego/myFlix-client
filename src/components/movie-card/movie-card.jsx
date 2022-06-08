import React from 'react';
import PropTypes from 'prop-types';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;
    return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string,
    Genre: PropTypes.shape({
      Name: PropTypes.string,
      Description: PropTypes.string
    }), 
    Actors: PropTypes.arrayOf(PropTypes.string),
    ImagePath: PropTypes.string,
    Featured: PropTypes.bool
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};