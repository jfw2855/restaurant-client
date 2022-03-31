import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'


const RestaurantForm = (props) => {
    const {handleChange,restaurant,handleSubmit} = props
 


    return (
        <Container className="justify-content-center">
            <Form onSubmit={handleSubmit}>
                <Form.Label>Restaurant Name</Form.Label>
                <Form.Control 
                    placeholder="Name of the Restaurant"
                    value={restaurant.name}
                    name='name'
                    onChange={handleChange}
                />
                <Form.Label>Location</Form.Label>
                <Form.Control 
                    placeholder="Location of the establishment"
                    value={restaurant.location}
                    name='location'
                    onChange={handleChange}
                />
                <Form.Label>Cost</Form.Label>
                <Form.Control 
                    placeholder="Enter $ to $$$$"
                    value={restaurant.cost}
                    name='cost'
                    onChange={handleChange}
                />
                <Form.Label>Yelp Rating</Form.Label>
                <Form.Control 
                    placeholder="Score rating"
                    value={restaurant.yelp_rating}
                    name='yelp_rating'
                    onChange={handleChange}
                />

                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default RestaurantForm