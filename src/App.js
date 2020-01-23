import React from 'react';
import MonthSelect from './MonthSelect'

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
				{this.state.month}
				<MonthSelect
					setMonth={this.setMonth}
					selectedMonth={this.state.month}
				/>
			</div>
		)
	}
}



export default App;
