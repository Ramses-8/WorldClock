import _axios from "axios";

const baseURL = "http://localhost:8888/v1"
const axios= _axios.create({
    baseURL
})

export const getCities = async function(){
    
    const result = await axios.get("/cities")
    return result.data;
}

export const getCityById = async function(id){
    const result = await axios.get(`/cities/${id}`)
    switch (result.status) {
        case 200:
            return result.data;        
        case 404:
            throw Error(`${id} of city not found`);
        default:
            throw Error("Unexpected error");
    }
    
}