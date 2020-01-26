import React from 'react'
import styled from 'styled-components'

const activeState = `
	transform: translateX(0%);
	z-index: 2;
	opacity: 1;
`

const nextState = `
transform: translateX(100%);
`

const previousState = `
transform: translateX(-100%);
`

const Arrow = styled.button`
	z-index: 100;
`
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 150px;
	overflow: hidden;
	position: relative;
	`
const Slide = styled.div`
		display: inline-block;
		width: 100%;
		text-align: center;
		position: absolute;
		transition: all 0.3s;
		opacity: 0;
		${props => {
		return props.position === 'active' ? activeState :
			props.position === 'next' ? nextState :
				props.position === 'previous' ? previousState : null
	}}
	`

export default class InfiniteSlider extends React.Component {
	state = {
		index: this.props.startingIndex || 0,
		slides: this.props.children
	}
	changeIndex = (value) => {
		if (this.state.index === 0 && value < 0) this.setState({ index: this.state.slides.length - 1 })
		else if (this.state.index === this.state.slides.length - 1 && value > 0) this.setState({ index: 0 })
		else this.setState(prevState => ({
			index: prevState.index + value
		}))
	}
	getSlidePosition(slideKey) {
		let index = this.state.index
		if (slideKey == index) return 'active'
		else if (slideKey === this.state.slides.length - 1 && index == 0) return 'previous'
		else if (slideKey === 0 && index == this.state.slides.length - 1) return 'next'
		else if (slideKey < index) return 'previous'
		else if (slideKey > index) return 'next'
	}
	render() {
		return (
			<Wrapper>
				<Arrow onClick={() => this.changeIndex(-1)}>-</Arrow>
				{this.state.slides ? this.state.slides.map(slide => {
					return <Slide key={slide.key} position={this.getSlidePosition(parseInt(slide.key))}>{slide}</Slide>
				}) : null}
				<Arrow onClick={() => this.changeIndex(1)}>+</Arrow>
			</Wrapper>
		)
	}
}
