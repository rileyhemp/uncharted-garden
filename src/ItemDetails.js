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
	margin-bottom: 12px;
`
const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	width: 300px;
	margin: auto;
`
const Pairing = styled.li`
	width: 50%;
	margin: 6px 0;
	font-weight: 300;
	font-size: 14px;
`

export default class ItemDetails extends React.Component {
	render() {
		if (this.props.showCard) {
			return (
				<Card onClick={this.props.closeCard}>
					<H1>{this.props.item.Name}</H1>
					{/* <H2>Preparation Recommendations</H2> */}
					<H3>Pairings</H3>
					<List>
						{this.props.item.Pairings.map((item) => {
							return <Pairing key={item}>{this.props.titleCase(item)}</Pairing>
						})}
					</List>
				</Card>
			)
		} else return null
	}
}