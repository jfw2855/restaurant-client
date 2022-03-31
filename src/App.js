// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import Header from './components/shared/Header'
import Home from './components/Home'

const App = () => {

  const [msgAlerts, setMsgAlerts] = useState([])

  console.log('message alerts', msgAlerts)


	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
      )
		})
	}

		return (
			<Fragment>
				<Header />
				<Routes>
					<Route path='/' element={<Home msgAlert={msgAlert} />} />
				</Routes>
			</Fragment>
		)
}

export default App
