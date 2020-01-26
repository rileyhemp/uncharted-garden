import React from 'react'
import styled from 'styled-components'

const Arrow = styled.button`
	z-index: 100;
`
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 250px;
	position: relative;
	`
const Slide = styled.div`
		display: inline-block;
		width: 100%;
		text-align: center;
		position: absolute;
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
		if (slideKey == this.state.index) return 'active'
		else if (slideKey < this.state.index) return 'previous'
		else if (slideKey > this.state.index) return 'next'
	}
	render() {
		return (
			<Wrapper>
				<Arrow onClick={() => this.changeIndex(-1)}>-</Arrow>
				{this.state.slides ? this.state.slides.map(slide => {
					return <Slide key={slide.key} position={this.getSlidePosition(slide.key)}>{slide}</Slide>
				}) : null}
				<Arrow onClick={() => this.changeIndex(1)}>+</Arrow>
			</Wrapper>
		)
	}
}
