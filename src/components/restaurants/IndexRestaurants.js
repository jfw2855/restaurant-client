import React, {useState, useEffect} from 'react'
import {getAllRestaurants} from '../../api/restaurants'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// styling object for cards
const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const IndexRestaurants = (props) => {
    const [restaurants,setRestaurants] =useState(null)

    useEffect(()=>{
        getAllRestaurants()
            .then(res => {
                setRestaurants(res.data.restaurants)
            })
            .catch(console.error)
    }, [])

    if (!restaurants) {
        return <p>Loading...</p>
    } else if (restaurants.length === 0) {
        return <p>Please add a restaurant</p>
    }

    let restaurantCards

    if (restaurants.length > 0) {
        restaurantCards = restaurants.map(restaurant => (
            <Card key={restaurant.id} style={{ width: '30%' }} className="m-2">
                <Card.Header>{restaurant.name}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Link to={`/restaurants/${restaurant.id}`}>View {restaurant.name}</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        ))
        }

    return <>
        <h3>All the restaurants</h3>
        <div>
            {restaurantCards}
        </div>
    </>
}

export default IndexRestaurants