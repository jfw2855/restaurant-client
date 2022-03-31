import React, { useState } from 'react'
import { addRestaurant } from '../../api/restaurants'
import { useNavigate } from 'react-router-dom'
import RestaurantForm from '../shared/RestaurantForm'


const AddRestaurant = (props) => {

    const navigate = useNavigate()
    // we'll need two states
    const [restaurant, setRestaurant] = useState({name: '', location: '', cost: '', yelp_rating: 0})

    const handleChange = (e) => {
        // e === event
        e.persist()

        setRestaurant(prevRestaurant => {
            const name = e.target.name
            let value = e.target.value

            if (e.target.type === 'number') {
                value = parseInt(e.target.value)
            }
            const updatedValue = { [name]: value }
            return {...prevRestaurant, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        addRestaurant(restaurant)
            // if create is successful, navg to show page
            .then(res => {navigate(`/restaurants/${res.data.restaurant._id}`)})
            // catch any errors
            .catch(console.error)
    }

    return (
        <RestaurantForm 
            restaurant={restaurant}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            heading="Add new restaurant!"
        />
    )
}

export default AddRestaurant