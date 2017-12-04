import React from 'react';


var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');


class PropTypes extends React.Component {
	render() {


		return (
			<div>
				<img>
				src={this.props.img}
				alt='this is an image'
				style={{width:100, height: 100}}
				</img>

				<h1>Name: {this.props.name}</h1>
				<h3>username: {this.props.username}</h3>
			</div>
		)
	}
}

ReactDOM.render(
	<App
		name= 'Nadia Carmon'
		username= 'nadiacarmon'
		img= {'./stocks.jpeg'}

		/>
	)


export default PropTypes.propTypes = {
	img: propTypes.string.isRequired,
	name: propTypes.string.isRequired
	username: propTypes.string.isRequired
}