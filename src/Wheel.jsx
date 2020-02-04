import React from 'react'
import styled from 'styled-components'
const wheel = require('./img/wheel.png')

const Wrapper = styled.div`
	height: 148px;
	width: 148px;
	position: relative;
	margin: 16px;
`

const Image = styled.div`
	background-image: url(${wheel});
	height: 100%;
	width: 100%;
	background-size: contain;
	background-repeat: no-repeat;
	cursor: pointer;
	position: relative;
	transition: all 500ms cubic-bezier(0.740, 0.010, 0.180, 1.005);
	transform: rotate${props => {
		return '(' + props.angle + 'deg)'
	}};
`
const MoveBack = styled.div`
	position:absolute;
	left: 0;
	top: 0;
	width: 50%;
	height: 100%;
	z-index: 2;
`
const MoveForward = styled.div`
	position:absolute;
	left: 50%;
	top:0;
	width: 50%;
	height: 100%;
	z-index: 2;
`

export default class Wheel extends React.Component {
	state = {
		previousMonth: new Date().getMonth()
	}
	changeIndex = (value) => {
		let props = this.props
		let newIndex
		if (props.month === 0 && value < 0) newIndex = 11
		else if (props.month === 11 && value > 0) newIndex = 0
		else newIndex = props.month + value
		this.setState({ index: newIndex }, () => this.props.changeIndex(newIndex))
	}
	render() {
		return (
			<Wrapper>
				<MoveBack {...this.props} onClick={() => this.changeIndex(-1)} />
				<Image {...this.props} className="noSelect" />
				<MoveForward {...this.props} onClick={() => this.changeIndex(1)} />
			</Wrapper>
		)
	}
}