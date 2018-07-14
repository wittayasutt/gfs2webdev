import React, { Component } from 'react'

class Home extends Component {
	render() {
		const { text } = this.props

		return (
			<section className="hero is-dark is-large">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">Hello, This is my homepage.</h1>
						<h2 className="subtitle">{text}</h2>
					</div>
				</div>
			</section>
		)
	}
}

export default Home
