import React from 'react'
import styled from 'styled-components'
const wheel = require('./img/wheel.png')

const Image = styled.div`
	background-image: url(${wheel});
	height: 148px;
	width: 148px;
	background-size: contain;
	background-repeat: no-repeat;
	cursor: pointer;
	margin: 16px;
`

export default class Wheel extends React.Component {
	state = {
		previousMonth: new Date().getMonth()
	}
	rotate(direction) {
		direction === 'forwards' ? console.log('ho') : console.log('yo')
	}
	render() {
		return (
			<Image className="noSelect" />
			// <img src={wheel} />
		)
	}
}