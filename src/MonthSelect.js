import React from 'react'
import Months from './data/Months'

export default class MonthSelect extends React.Component {
	componentDidMount() {
		this.props.setMonth(new Date().getMonth())
	}
	render() {
		return (
			<select defaultValue={this.props.month}>
				{Months.map((month) => (
					<option key={month.value} value={month.value}>{month.name}</option>
				))}
			</select>
		)
	}
}