import React, {useState, useEffect} from 'react'
import {getRestaurant, updateRestaurant, removeRestaurant} from '../../api/restaurants'
import { Spinner, Container, Card, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import EditRModal from './EditRModal'

// styling object for cards
const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const ShowRestaurant = (props) => {
    const [restaurant,setRestaurant] =useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const {id} = useParams()
    const navigate = useNavigate()

    

    useEffect(()=>{
        getRestaurant(id)
            .then(res => {
                setRestaurant(res.data.restaurant)
            })
            .catch(console.error)
    }, [updated])

    const destroyRestaurant = () => {
        removeRestaurant(id)
            .then(() => {navigate(`/`)})
            // catch any errors
            .catch(console.error)
    }


    if (!restaurant) {
        return (
            <Container fluid className="justify-content-center">
                <Spinner animation="border" role="status" variant="warning" >
                    <span className="visually-hidden">Loading....</span>
                </Spinner>
            </Container>
        )
    }



    return (
        <>
            <Container className="fluid">
                <Card>
                    <Card.Header>{restaurant.name}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <small>Location: {restaurant.location}</small><br/>
                            <small>Cuisine: {restaurant.cuisine.join(', ')}</small><br/>
                            <small>Cost: {restaurant.cost}</small><br/>
                            <small>Yelp Rating: {restaurant.yelp_rating}/5</small><br/>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={() => setModalOpen(true)} className="m-2" variant="warning">
                            Edit Restaurant
                        </Button>
                        <Button onClick={() => destroyRestaurant()} className="m-2" variant="danger">
                            Delete Resaurant
                        </Button>

                    </Card.Footer>
                </Card>
            </Container>
            <EditRModal
                restaurant={restaurant}
                show={modalOpen}
                triggerRefresh={()=> setUpdated(prev=> !prev)}
                updateRestaurant={updateRestaurant}
                handleClose={()=> setModalOpen(false)}
                />
         </>
    )
}

export default ShowRestaurant