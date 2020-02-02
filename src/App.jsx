import './css/fonts.css'
import './css/main.css'
import React from 'react';
import MonthSelect from './MonthSelect'
import ProduceContainer from './ProduceContainer'
import styled from 'styled-components'
import { Reset } from 'styled-reset'
const background = require('./img/background.transparency.png')
const logo = require('./img/logo.png')

const Wrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	background-image: url(${background});
	background-position: 50%, 100%;
	background-size: cover;
	background-repeat: no-repeat;
`
const Logo = styled.div`
	background-image: url(${logo});
	height: 50px;
	width: 217px;
	margin: 32px 0 16px 0;
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
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
					<Logo />
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
