import './css/fonts.css'
import './css/main.css'
import React from 'react';
import MonthSelect from './MonthSelect'
import ProduceContainer from './ProduceContainer'
import styled from 'styled-components'
import { Reset } from 'styled-reset'

const Wrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
`
const H1 = styled.h1`
	font-family: sans-serif;
	font-size: 20px;
	color: #707070;
	text-align: center;
	margin: 40px 0 20px 0;
`
const Title = styled.p`
	font-weight: 300;
	text-align: center;
	font-size: 12px;
	letter-spacing: 1px;
	margin: 0 0 20px 0;
`

class App extends React.Component {
	state = {
		month: ''
	}
	setMonth = (month) => {
		this.setState({ month: month })
	}
	render() {
		return (
			<React.Fragment>
				<Reset />
				<Wrapper>
					<H1>Uncharted Garden</H1>
					<Title>A voyage into seasonal produce</Title>
					<MonthSelect
						setMonth={this.setMonth}
						selectedMonth={this.state.month}
					/>
					<ProduceContainer
						month={this.state.month}
					/>
				</Wrapper>
			</React.Fragment>
		)
	}
}

// function month_name(date) { new Date(date).toLocaleString('en-us', { month: "long" }) }

export default App;
