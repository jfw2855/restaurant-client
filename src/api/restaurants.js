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

export const addRestaurant = (newRestaurant) => {
    return axios({
        url: `${apiUrl}/restaurants`,
        method: 'POST',
        data: { restaurant: newRestaurant }
    })
}



// PATCH -> update function

export const updateRestaurant = (updatedRestaurant) => {

    return axios({
        url: `${apiUrl}/restaurants/${updatedRestaurant._id}`,
        method: 'PATCH',
        data: { restaurant: updatedRestaurant }
    })
}


// DELETE -> remove function
export const removeRestaurant = (restaurantId) => {
    return axios({
        url: `${apiUrl}/restaurants/${restaurantId}`,
        method: 'DELETE'
    })
}