import React, { Component } from 'react'
import styled from 'styled-components'

class Home extends Component {
	render() {
		const { name } = this.props

		return (
			<div>
				<section class="hero is-dark is-large">
					<div class="hero-body">
						<div class="container">
							<h1 class="title">Hello</h1>
							<h2 class="subtitle">{name}</h2>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default Home
