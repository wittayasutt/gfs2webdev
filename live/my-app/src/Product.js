import React, { Component } from 'react'
import Card from './Card'

class Product extends Component {
	constructor(props) {
		super(props)

		this.state = {
			cards: ['A', 'B', 'C', 'D', 'E', 'F']
		}
	}

	addCard = name => {
		let { cards } = this.state
		cards.push(name)
		this.setState({ cards })
	}

	render() {
		const { cards } = this.state

		return (
			<div className="container">
				<div
					className="columns"
					style={{ display: 'flex', flexFlow: 'row wrap' }}>
					{cards.map(card => (
						<div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
							<Card name={card} />
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default Product
