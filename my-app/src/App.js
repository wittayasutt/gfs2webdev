import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from './logo.svg'
import './App.css'

import NavBar from './Navbar'
import Home from './Home'
import Product from './Product'

const ButtonWrapper = styled.div`
	margin: 10px;
`

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px auto;
`

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: null
		}
	}

	changeName = e => {
		console.log(e.target.value)
		this.setState({ name: e.target.value })
	}

	render() {
		const { name } = this.state

		return (
			<div className="App">
				<NavBar />
				<ButtonWrapper>
					<Link
						class="button is-primary"
						to="/"
						style={{ marginRight: '10px' }}>
						Home
					</Link>
					<Link class="button is-link" to="/product">
						Product
					</Link>
				</ButtonWrapper>
				<Container className="container">
					<div class="field has-addons">
						<div class="control">
							<input
								class="input"
								type="text"
								placeholder="your name"
								onChange={e => this.changeName(e)}
							/>
						</div>
					</div>
				</Container>
				<Route exact={true} path="/" render={() => <Home name={name} />} />
				<Route exact={true} path="/product" component={Product} />
			</div>
		)
	}
}

export default App
