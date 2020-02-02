import React from 'react'
import styled from 'styled-components'

const activeState = `
transform: translateX(0%);
opacity: 1
`

const nextState = `
transform: translateX(0);
`

const previousState = `
transform: translateX(0);
`

const Wrapper = styled.div`
	width: 100%;
	overflow: hidden;
`

const Slide = styled.div`
	position: absolute;
	transition: all 0.27s;
	opacity: 0;
	z-index: -1;
	${props => {
		return props.position === 'active' ? activeState :
			props.position === 'next' ? nextState :
				props.position === 'previous' ? previousState : null
	}}
`

export default class ItemSlider extends React.Component {
	state = {
		slides: this.props.children
	}
	getSlidePosition(slideKey) {
		let index = this.props.month
		if (slideKey == index) return 'active'
		else if (slideKey === this.state.slides.length - 1 && index == 0) return 'previous'
		else if (slideKey === 0 && index == this.state.slides.length - 1) return 'next'
		else if (slideKey < index) return 'previous'
		else if (slideKey > index) return 'next'
	}
	render() {
		return (
			<Wrapper className="wrapper">
				{this.state.slides ? this.state.slides.map(slide => {
					return (
						<Slide className="Slidewsewe" key={slide.key} position={this.getSlidePosition(parseInt(slide.key))}>{slide}</Slide>
					)
				}) : null}
			</Wrapper>
		)
	}
}
