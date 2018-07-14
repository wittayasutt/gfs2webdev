import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Product from './Product'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: 'Best'
		}
	}

	changeName = e => {
		console.log(e.target.value)
		this.setState({ name: e.target.value })
	}

	render() {
		// const name = this.state.name
		const { name } = this.state

		return (
			<div>
				<Nav />
				<input
					className="input"
					type="text"
					placeholder="Text input"
					value={name}
					onChange={this.changeName}
				/>
				<Link class="button is-primary" to="/">
					Home
				</Link>
				<Link class="button is-link" to="/product">
					Product
				</Link>

				<Route exact={true} path="/" render={() => <Home text={name} />} />
				<Route path="/product" render={() => <Product />} />
			</div>
		)
	}
}

export default App
