import React from 'react'
import Months from './data/Months'
import InfiniteSlider from './InfiniteSlider'
import Wheel from './Wheel'

export default class MonthSelect extends React.Component {
	handleChange = (event) => {
		this.props.setMonth(parseInt(event.target.value))
	}
	render() {
		return (
			<React.Fragment>
				<InfiniteSlider
					startingIndex={this.props.selectedMonth}
					{...this.props}
				>
					{Months.map(month => { return <h1 style={{ fontSize: '24px' }} key={month.value}>{month.name}</h1> })}
				</InfiniteSlider>
				<Wheel newMonth={this.props.selectedMonth} />
			</React.Fragment>
		)
	}
}