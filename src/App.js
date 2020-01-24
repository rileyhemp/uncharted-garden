import React from 'react';
import MonthSelect from './MonthSelect'
import ProduceContainer from './ProduceContainer'
import { Reset } from 'styled-reset'

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
				<div>
					<MonthSelect
						setMonth={this.setMonth}
						selectedMonth={this.state.month}
					/>
					<ProduceContainer
						month={this.state.month}
					/>
				</div>
			</React.Fragment>
		)
	}
}



export default App;
