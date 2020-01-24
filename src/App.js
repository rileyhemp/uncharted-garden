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



export default App;
