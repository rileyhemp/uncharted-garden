import React from 'react'
import ProduceList from './data/Produce'
import styled from 'styled-components'

const Label = styled.figcaption``
const Image = styled.img``
const ProduceItem = styled.figure``
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
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
			</Container>
		)
	}
}


