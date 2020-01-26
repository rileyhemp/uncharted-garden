import React from 'react'
import Months from './data/Months'
import InfiniteSlider from './InfiniteSlider'
// import styled from 'styled-components'

export default class MonthSelect extends React.Component {
	componentDidMount() {
		this.props.setMonth(new Date().getMonth())
	}
	handleChange = (event) => {
		this.props.setMonth(parseInt(event.target.value) + 1)
	}
	render() {
		return (
			// <select defaultValue={this.props.month} onChange={this.handleChange}>
			// 	{Months.map((month) => (
			// 		<option key={month.value} value={month.value}>{month.name}</option>
			// 	))}
			// </select>
			<InfiniteSlider
				startingIndex={this.props.selectedMonth}
				{...this.props}
			>
				{Months.map(month => { return <h1 key={month.value}>{month.name}</h1> })}
			</InfiniteSlider >
		)
	}
}