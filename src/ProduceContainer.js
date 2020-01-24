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

	render() {
		return (
			<Container>
				{Object.keys(ProduceList).map((item) => {
					return ProduceList[item].Season.includes(this.props.month) ?
						<ProduceItem key={item}>
							<Image src="https://via.placeholder.com/100" />
							<Label>{ProduceList[item].Name}</Label>
						</ProduceItem> : null
				})}
				<ItemDetails
					item={ProduceList['carrots']}
				/>
			</Container>
		)
	}
}


