import React from 'react'
import ProduceList from './data/Produce'
import styled from 'styled-components'
import ItemDetails from './ItemDetails'
import ItemSlider from './ItemSlider'


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
	showDetails = (selectedItem) => {
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
					titleCase={this.titleCase}
					showDetails={this.showDetails}
				/>
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