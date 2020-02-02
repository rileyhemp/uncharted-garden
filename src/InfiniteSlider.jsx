import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const activeState = `
	transform: translateX(0%);
	opacity: 1;
`

const nextState = `
transform: translateX(100%);
`

const previousState = `
transform: translateX(-100%);
`
const OuterWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const SlideWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 150px;
	height: 36px;
	overflow: hidden;
	position: relative;
`

const Slide = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	text-align: center;
	position: absolute;
	transition: all 500ms cubic-bezier(0.740, 0.010, 0.180, 1.005);
	opacity: 0;
	z-index: -1;
	${props => {
		return props.position === 'active' ? activeState :
			props.position === 'next' ? nextState :
				props.position === 'previous' ? previousState : null
	}}
`

export default class InfiniteSlider extends React.Component {
	state = {
		slides: this.props.children
	}
	changeIndex = (value) => {
		let props = this.props
		let newIndex
		if (props.month === 0 && value < 0) newIndex = 11
		else if (props.month === 11 && value > 0) newIndex = 0
		else newIndex = props.month + value
		this.setState({ index: newIndex }, () => this.props.changeIndex(newIndex))
	}
	getSlidePosition = (slideKey) => {
		let index = this.props.month
		if (slideKey === index) return 'active'
		else if (slideKey === 11 && index === 0) return 'previous'
		else if (slideKey === 0 && index === 11) return 'next'
		else if (slideKey < index) return 'previous'
		else if (slideKey > index) return 'next'
	}
	render() {
		return (
			<OuterWrapper>
				<IconButton aria-label="back" onClick={() => this.changeIndex(-1)} >
					<ArrowBackIosIcon style={{ color: '#F0EAD5', transform: 'translateX(6px)' }} />
				</IconButton>
				<SlideWrapper>
					{
						this.state.slides ? this.state.slides.map(slide => {
							return <Slide {...this.props} key={slide.key} position={this.getSlidePosition(parseInt(slide.key))}>{slide}</Slide>
						}) : null
					}
				</SlideWrapper>
				<IconButton aria-label="forward" onClick={() => this.changeIndex(+1)}>
					<ArrowForwardIosIcon style={{ color: '#F0EAD5' }} />
				</IconButton>
			</OuterWrapper>
		)
	}
}

