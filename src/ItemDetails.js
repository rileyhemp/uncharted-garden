import React from 'react'
import styled from 'styled-components'

const margin = 20
const Card = styled.div`
	position: absolute;
	min-height: 100vh;
	width: 100%;
	background-color: #FDF8E5;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 30px;
	top: ${margin}px;
	width: calc(100vw - ${margin * 2}px);
	color: #161638;
`
const H1 = styled.h1`
	font-weight: 700;
	font-size: 18px;
	text-transform: uppercase;
	text-align: center;
	margin: 30px;
	letter-spacing: 1px;
`

const H2 = styled(H1)`
	font-size: 15px;
	font-weight: 500;
`

const H3 = styled(H2)`
	text-transform: none;
`

export default class ItemDetails extends React.Component {
	render() {
		return (
			<Card>
				<H1>{this.props.item.Name}</H1>
				<H2>Preparation Recommendations</H2>
				<H3>Pairings</H3>
			</Card>
		)
	}
}