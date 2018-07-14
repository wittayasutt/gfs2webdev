import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class NavBar extends Component {
	render() {
		return (
			<nav
				class="navbar is-primary"
				role="navigation"
				aria-label="main navigation">
				<div className="container">
					<div class="navbar-brand">
						<Link class="navbar-item" to="/">
							<img
								src="https://bulma.io/images/bulma-logo.png"
								alt="Bulma: a modern CSS framework based on Flexbox"
								width="112"
								height="28"
							/>
						</Link>

						<a
							role="button"
							class="navbar-burger"
							aria-label="menu"
							aria-expanded="false">
							<span aria-hidden="true" />
							<span aria-hidden="true" />
							<span aria-hidden="true" />
						</a>
					</div>
				</div>
			</nav>
		)
	}
}

export default NavBar
