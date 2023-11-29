import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const adding = nameObject => {
    const request = axios.post(baseUrl, nameObject)
    return request.then(response => response.data)   
}

const updating = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)   
}

const deletting = (id) => {
    const request= axios.delete(`${baseUrl}/${id}`)
    return request.then()
}

export default {
    getAll,
    adding,
    updating,
    deletting,
}