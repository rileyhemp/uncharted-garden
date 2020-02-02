import React from 'react'
import ProduceList from './data/Produce'
import Months from './data/Months'
import styled from 'styled-components'
import ItemDetails from './ItemDetails'
import ItemSlider from './ItemSlider'

const Label = styled.figcaption`
	font-size: 12px;
	font-weight: 300;
`
const Image = styled.img``

const MonthWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`

const ProduceItem = styled.figure`
	margin: 4px;
	text-align: center;
`
const Container = styled.div`
	max-width: 800px;
	width: 100%;
	margin: 8px;
`

export default class ProduceContainer extends React.Component {
	state = {
		selectedItem: '',
		showCard: false
	}
	showDetails(selectedItem) {
		this.setState({
			selectedItem: selectedItem,
			showCard: true
		})
	}
	closeDetails = () => {
		this.setState({
			showCard: false
		})
	}
	titleCase(str) {
		return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
	}
	render() {
		return (
			<Container>
				<ItemSlider
					startingIndex={this.props.month}
					month={this.props.month}
				>
					{Months.map(month => {
						return (
							<MonthWrapper className="Month Wrapper" key={month.value}>
								{Object.keys(ProduceList).map((item) => {
									return ProduceList[item].seasons.includes(month.value + 1) ?
										<ProduceItem key={ProduceList[item].name} onClick={() => { this.showDetails(item) }}>
											<Image src="https://via.placeholder.com/100" />
											<Label>{this.titleCase(ProduceList[item].name)}</Label>
										</ProduceItem> : null
								})}
							</MonthWrapper>
						)
					})}
				</ItemSlider>
				<ItemDetails
					item={ProduceList[this.state.selectedItem]}
					showCard={this.state.showCard}
					closeCard={this.closeDetails}
					titleCase={this.titleCase}
				/>
			</Container>
		)
	}
}