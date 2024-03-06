import axios from 'axios'

const BASE_URL = 'http://localhost:7000/users'

export async function getAllUsers() {
    const { data } = await axios.get(`${BASE_URL}`)

    return data
}

export async function getUserId(id) {
    const { data } = await axios.get(`${BASE_URL}/${id}`)

    return data
}

export async function CreateUser(user) {
    const { data } = await axios.post(`${BASE_URL}`, user)
    return data
}

export async function UpdateUser(id,user) {
    const { data } = await axios.put(`${BASE_URL}/${id}`,user)

    return data
}

export async function DeleteUser(id) {
    const { data } = await axios.delete(`${BASE_URL}/${id}`)

    return data
}