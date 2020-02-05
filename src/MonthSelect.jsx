import React from 'react'
import Months from './data/Months'
import MonthSlider from './MonthSlider'

export default class MonthSelect extends React.Component {
	handleChange = (event) => {
		this.props.setMonth(parseInt(event.target.value))
	}
	render() {
		return (
			<React.Fragment>
				<MonthSlider
					startingIndex={this.props.selectedMonth}
					{...this.props}
				>
					{Months.map(month => { return <h1 style={{ fontSize: '24px' }} key={month.value}>{month.name}</h1> })}
				</MonthSlider>
			</React.Fragment>
		)
	}
}