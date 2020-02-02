import React from 'react'
import styled from 'styled-components'
import Months from './data/Months'
import ProduceList from './data/Produce'

const activeState = `
transform: translateX(0%);
opacity: 1
`

const nextState = `
transform: translateX(120%);
`

const previousState = `
transform: translateX(-120%);
`


const MonthWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
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
const Label = styled.figcaption`
	font-size: 12px;
	font-weight: 300;
`
const Image = styled.img``

const ProduceItem = styled.figure`
	margin: 4px;
	text-align: center;
`
const Wrapper = styled.div`
	width: 100%;
	position: relative;
`

export default class ItemSlider extends React.Component {
	state = {
		slides: this.props.children
	}
	getSlidePosition(slideKey) {
		let index = this.props.month
		if (slideKey === index) return 'active'
		else if (slideKey === 11 && index === 0) return 'previous'
		else if (slideKey === 0 && index === 11) return 'next'
		else if (slideKey < index) return 'previous'
		else if (slideKey > index) return 'next'
	}
	render() {
		return (
			<Wrapper className="wrapper">
				{Months.map(month => {
					return (
						<MonthWrapper className="Month Wrapper" key={month.value} position={this.getSlidePosition(parseInt(month.value))}>
							{Object.keys(ProduceList).map((item) => {
								return ProduceList[item].seasons.includes(month.value + 1) ?
									<ProduceItem key={item} onClick={() => { this.props.showDetails(item) }}>
										<Image src="https://via.placeholder.com/100" />
										<Label>{this.props.titleCase(ProduceList[item].name)}</Label>
									</ProduceItem> : null
							})}
						</MonthWrapper>
					)
				})}
			</Wrapper>
		)
	}
}
