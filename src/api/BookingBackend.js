import axios from 'axios'

const BASE_URL = 'http://localhost:7000/booking'

export async function getAllBooking() {
    const { data } = await axios.get(`${BASE_URL}`)

    return data
}

export async function getBookingId(id) {
    const { data } = await axios.get(`${BASE_URL}/${id}`)

    return data
}

export async function CreateBooking(user) {
    const { data } = await axios.post(`${BASE_URL}`,user)

    return data
}

export async function UpdateBooking(id,user) {
    const { data } = await axios.put(`${BASE_URL}/${id}`,user)

    return data
}

export async function DeleteBooking(id) {
    const { data } = await axios.delete(`${BASE_URL}/${id}`)

    return data
}