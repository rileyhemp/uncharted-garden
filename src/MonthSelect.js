import React from 'react'
import Months from './data/Months'

export default class MonthSelect extends React.Component {
	componentDidMount() {
		this.props.setMonth(new Date().getMonth())
	}
	handleChange = (event) => {
		this.props.setMonth(event.target.value)
	}
	render() {
		return (
			<select defaultValue={this.props.month} onChange={this.handleChange}>
				{Months.map((month) => (
					<option key={month.value} value={month.value}>{month.name}</option>
				))}
			</select>
		)
	}
}