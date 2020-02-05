import React from 'react'
import styled from 'styled-components'
import Months from './data/Months'
import ProduceList from './data/Produce'
const _ = require('lodash')

const activeState = `
transform: translateX(0%);
opacity: 1
`
const nextState = `
transform: translateX(200%);
`
const previousState = `
transform: translateX(-200%);
`
const MonthWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	position: absolute;
	transition: all 500ms cubic-bezier(0.740, 0.010, 0.180, 1.005);
	opacity: 0;
	${props => {
		return props.position === 'active' ? activeState :
			props.position === 'next' ? nextState :
				props.position === 'previous' ? previousState : null
	}};
`
const Label = styled.figcaption`
	font-size: 12px;
	font-weight: 300;
	margin: 4px;
`
const Image = styled.img`
	height: 100px;
	position: relative;
	cursor: pointer;
`
const ProduceItem = styled.figure`
	margin: 4px;
	text-align: center;
`
const Wrapper = styled.div`
	width: 100%;
	height: 1170px;
	position: relative;
	overflow: visible;
	margin-bottom: 40px;
	@media(min-width: 768px){
		height: 650px;
	}
	@media (min-width: 1024px){
		overflow: visible;
		height: 520px;
	}
`

export default class ProduceSlider extends React.Component {
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
			<Wrapper>
				{Months.map(month => {
					return (
						<MonthWrapper className={'slide-' + (month.value + 1)} key={month.value} position={this.getSlidePosition(parseInt(month.value))}>
							{Object.keys(ProduceList).map((item) => {
								return ProduceList[item].seasons.includes(month.value + 1) ?
									<ProduceItem key={item} onClick={() => { this.props.showDetails(item) }}>
										<Image src={require('./img/produce-images/' + _.kebabCase(ProduceList[item].name) + '.png')} />
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
