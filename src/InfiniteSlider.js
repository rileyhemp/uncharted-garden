import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function InfiniteSlider(props) {
	console.log(props)
	const Arrow = styled.button``
	const Wrapper = styled.div``
	const Slide = styled.div``
	const [index, setIndex] = useState(props.startingIndex || 0)
	const [slides, changeSlide] = useState(props.children)
	useEffect(() => {

	})
	console.log('index:', index)
	console.log('slides:', slides)
	return (
		<React.Fragment>
			<Arrow onClick={() => setIndex(index - 1)}>-</Arrow>
			<Wrapper>
				{slides.map(slide => {
					return <Slide key={slide.key}>{slide}</Slide>
				})}
			</Wrapper>
			<Arrow onClick={() => setIndex(index + 1)}>+</Arrow>
		</React.Fragment>
	)
}