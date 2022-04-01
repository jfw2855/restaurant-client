import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import RestaurantForm from '../shared/RestaurantForm'

const EditRModal = (props) => {
    const { show, handleClose, updateRestaurant, triggerRefresh } = props
    const [restaurant, setRestaurant] = useState(props.restaurant)

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

        updateRestaurant(restaurant)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            // catch any errors
            .catch(console.error)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <RestaurantForm 
                    restaurant={restaurant}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Edit restaurant!"
                />
            </Modal.Body>
        </Modal>
    )
}
    
export default EditRModal