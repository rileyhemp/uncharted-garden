import React from 'react'
import ProduceList from './data/Produce'
import styled from 'styled-components'
import ItemDetails from './ItemDetails'

const Label = styled.figcaption`
	font-size: 12px;
	font-weight: 300;
`
const Image = styled.img``
const ProduceItem = styled.figure`
	margin: 8px;
	text-align: center;
`
const Container = styled.div`
	max-width: 800px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
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
				{Object.keys(ProduceList).map((item) => {
					return ProduceList[item].seasons.includes(this.props.month + 1) ?
						<ProduceItem key={item} onClick={() => { this.showDetails(item) }}>
							<Image src="https://via.placeholder.com/100" />
							<Label>{this.titleCase(ProduceList[item].name)}</Label>
						</ProduceItem> : null
				})}
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


