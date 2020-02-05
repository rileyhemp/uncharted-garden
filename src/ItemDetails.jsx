import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Techniques from './data/Techniques'

const margin = 20
const CardWrapper = styled.div`
	position: fixed;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	z-index: 5;
	background-color: rgba(0,0,0,0.4);
`

const Card = styled.div`
	position: relative;
	box-sizing: border-box;
	overflow:scroll;
	height: 100%;
	width: calc(100vw - ${margin * 2}px);
	max-width: 800px;
	top: ${margin}px;
	padding-top: ${margin}px;
	background-color: #FDF8E5;
	color: #161638;
	border-radius: 30px;
	@media (min-width: 768px){
		overflow: visible;
		height: initial;
	}
`
const H1 = styled.h1`
	font-weight: 700;
	font-size: 18px;
	text-transform: uppercase;
	text-align: center;
	margin: 30px 30px 10px 30px;
	letter-spacing: 1px;
`
const H2 = styled(H1)`
	font-size: 15px;
	font-weight: 500;
	margin: 30px 10px 0 10px;
`
const H3 = styled(H2)`
	text-transform: none;
	margin-bottom: 12px;
	text-align: left;
	margin: 10px 30px;
`
const List = styled.ul`
	display: block;
	columns: 2;
	width: 100%;
	padding: 0 20px 0 30px;
	box-sizing: border-box;
	margin-bottom: 80px;
	@media (min-width: 768px){
		columns: 4;
	}
`
const Pairing = styled.li`
	width: 100%;
	display: inline-block;
	margin: 6px 0;
	font-weight: 300;
	font-size: 14px;
	line-height: 1.25;
`
const CloseButtonContainer = styled.div`
	position: fixed;
	right: 20px;
	top: 20px;
	@media (min-width: 768px){
		position: absolute;
		top: 8px;
		right: 8px;
	}
`

const TechniquesContainer = styled.div`
	width: 100%;
	padding: 10px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	box-sizing: border-box;
`

const Image = styled.img`
	height: 60px;
`

const Caption = styled.figcaption`
	text-align: center;
	font-size: 11px;
	font-weight: 300;
	transform: translateY(-3px);
`

const Technique = styled.figure`
	margin: 4px;
`


export default class ItemDetails extends React.Component {
	render() {
		if (this.props.showCard) {
			return (
				<CardWrapper>
					<Card onClick={this.props.closeCard}>
						<CloseButtonContainer>
							<IconButton aria-label="close">
								<CloseIcon fontSize="large" />
							</IconButton>
						</CloseButtonContainer>
						<H1>{this.props.item.name}</H1>
						<H2>Preparation Recommendations</H2>
						<TechniquesContainer>
							{this.props.item.preparations.map(technique => {
								return (
									<Technique key={technique - 1}>
										<Image src={require('./img/prep-icons/' + Techniques[technique - 1] + '.png')} />
										<Caption>{this.props.titleCase(Techniques[technique - 1])}</Caption>
									</Technique>
								)
							})}
						</TechniquesContainer>
						<H3>Recommended Pairings</H3>
						<List>
							{this.props.item.pairings.map((item) => {
								return <Pairing key={item}>{this.props.titleCase(item)}</Pairing>
							})}
						</List>
					</Card>
				</CardWrapper>
			)
		} else return null
	}
}