import IndexRestaurants from "./restaurants/IndexRestaurants"

const Home = (props) => {

	console.log('props in home', props)

	return (
		<>
			<h2>Home Page</h2>
			<IndexRestaurants/>
		</>
	)
}

export default Home
