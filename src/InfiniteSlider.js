import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { render } from '@testing-library/react'
const Arrow = styled.button``
const Wrapper = styled.div``
const Slide = styled.div``

export default class InfiniteSlider extends React.Component {
	state = {
		index: this.props.startingIndex || 0,
		slides: this.props.children
	}
	render() {
		return (
			<React.Fragment>
				<Arrow>-</Arrow>
				<Wrapper>
					{this.state.slides.map(slide => {
						return <Slide key={slide.key}>{slide}</Slide>
					})}
				</Wrapper>
				<Arrow>+</Arrow>
			</React.Fragment>
		)
	}
}