import React, { Component } from 'react'
import styled from 'styled-components'

import Card from './Card'

const Container = styled.div``

const Columns = styled.div`
	display: flex;
	flex-flow: row wrap;
`

class Product extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: ['Best', 'Pat', 'Palm', 'Jade', 'AAA', 'sdsdsd', 'sdsd'],
			newName: null
		}
	}

	handleName = e => {
		this.setState({ newName: e.target.value })
	}

	handleEnter = () => {
		const { name, newName } = this.state
		name.push(newName)

		this.setState({ name })
	}

	render() {
		const { name, newName } = this.state

		console.log('newName', newName)

		return (
			<Container className="container">
				<div class="field has-addons">
					<div class="control">
						<input
							class="input"
							type="text"
							placeholder="Enter name"
							onChange={e => this.handleName(e)}
						/>
					</div>
					<div class="control">
						<a class="button is-info" onClick={() => this.handleEnter()}>
							Enter
						</a>
					</div>
				</div>
				<Columns class="columns is-mobile">
					{name.map((n, index) => (
						<div class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
							<Card name={n} key={index} />
						</div>
					))}
				</Columns>
			</Container>
		)
	}
}

export default Product
