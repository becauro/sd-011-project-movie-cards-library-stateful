import React from 'react';

class AddMovie extends React.Component {
	constructor() {
		super();
		this.state = {
			subtitle: '',
			title: '',
			imagePath: '',
			storyline: '',
			rating: 0,
			genre: 'action',
		}
	}
  render() {
		const { callback } = this.props;
		return (
			<form>

			</form>
		)
	}
}

export default AddMovie;
