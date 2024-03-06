import axios from 'axios'

const BASE_URL = 'http://localhost:7000/hotel'

export async function getAllHotel() {
    const { data } = await axios.get(`${BASE_URL}`)

    return data
}

export async function getHotelId(id) {
    const { data } = await axios.get(`${BASE_URL}/${id}`)

    return data
}

export async function CreateHotel(user) {
    const { data } = await axios.post(`${BASE_URL}`,user)

    return data
}

export async function UpdateHotel(id,user) {
    const { data } = await axios.put(`${BASE_URL}/${id}`,user)

    return data
}

export async function DeleteHotel(id) {
    const { data } = await axios.delete(`${BASE_URL}/${id}`)

    return data
}