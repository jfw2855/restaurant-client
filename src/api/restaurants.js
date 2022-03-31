import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllRestaurants = () => {
    return axios(`${apiUrl}/restaurants`)
}

// show function

export const getRestaurant = (restaurantId) => {
    return axios(`${apiUrl}/restaurants/${restaurantId}`)
}


// POST -> create function


// PATCH -> update function


// DELETE -> remove function
