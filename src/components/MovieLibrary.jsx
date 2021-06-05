// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
    constructor(props) {
        super(props);

        const { movies } = this.props;
        this.state = {
            searchText: '',
            bookmarkedOnly: false,
            selectedGenre: '',
            movies,
        }
    }

    render() {
        return(
            <SearchBar />
        );
    }
}

MovieLibrary.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        storyline: PropTypes.string,
        rating: PropTypes.number,
        imagePath: PropTypes.string,
        }),
    ).isRequired,
};

export default MovieLibrary;