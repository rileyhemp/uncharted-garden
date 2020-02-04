import './css/fonts.css'
import './css/main.css'
import React from 'react';
import MonthSelect from './MonthSelect'
import ProduceContainer from './ProduceContainer'
import Wheel from './Wheel'
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
	z-index: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`
const LogoText = styled.h1`
	font-weight: 700;
	font-size: 19px;
	letter-spacing: 1.5px;
	text-align: center;
	z-index: 1;
	position: relative;
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
		month: new Date().getMonth(),
		wheelPosition: 0
	}
	setMonth = (month) => {
		this.setState(prevState => {
			this.moveWheel(prevState.month, month)
			return { month: month }
		})
	}
	moveWheel(from, to) {
		let angle = this.state.wheelPosition
		let amount = 60
		to === 11 && from === 0 ? angle -= amount :
			to === 0 && from === 11 ? angle += amount :
				to > from ? angle += amount : angle -= amount
		this.setState({ wheelPosition: angle })
	}
	render() {
		return (
			<React.Fragment>
				<Reset />
				<Wrapper>
					<Logo>
						<LogoText>Uncharted Garden</LogoText>
					</Logo>

					<Title>A voyage into seasonal produce</Title>
					<MonthSelect
						changeIndex={this.setMonth}
						month={this.state.month}
					/>
					<Wheel angle={this.state.wheelPosition} month={this.state.month} changeIndex={this.setMonth} />
					<Title>Spin the wheel to discover what's in season!</Title>
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
