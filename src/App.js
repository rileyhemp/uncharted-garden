import React from 'react';
import MonthSelect from './MonthSelect'
import ProduceContainer from './ProduceContainer'

class App extends React.Component {
	state = {
		month: ''
	}
	setMonth = (month) => {
		this.setState({ month: month })
	}
	render() {
		return (
			<div>
				<MonthSelect
					setMonth={this.setMonth}
					selectedMonth={this.state.month}
				/>
				<ProduceContainer
					month={this.state.month}
				/>
			</div>
		)
	}
}



export default App;
