import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	margin-bottom: 16px;
	@media (min-width: 1024px){
		justify-content: space-between;
		position: fixed;
		bottom: 8px;
	}
`

const P = styled.p`
	font-size: 11px;
	font-weight: 300;
	margin: 0 16px 8px 16px;
	padding: 0 16px;
	letter-spacing: 1px;
`

const Footer = (props) => {
	return (
		<Container>
			<P>Made with ❤️ + ☕ at The Creative Circus, 2020</P>
			<P>Data Source: The Flavor Bible, Dornenburg and Page</P>
		</Container>
	)
}

export default Footer