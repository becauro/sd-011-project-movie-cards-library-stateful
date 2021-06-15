// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'enzyme';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';

class AddMovie extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            subtitle: '',
            title: '',
            imagePath: '',
            storyline: '',
            rating: 0,
            genre: 'action',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({target}) {
        const { name, value } = target;
        this.setState({[name]: value});
    }

    render() {
        const { title, subtitle, storyline, imagePath, rating, genre } = this.state;
        return(
            <form data-testid="add-movie-form">
                <InputTitle value={ title } handleChange={ this.handleChange }/>
                <InputSubtitle value={ subtitle } />
            </form>
        );
    }
}

AddMovie.propTypes = {

};

export default AddMovie;