import axios from "axios";

const API_URL = "https://fakestoreapi.com";

export const fetchProduct = async () => {
    const response = await axios.get(`${API_URL}/products`);
    console.log("Response is awesome");
    console.log(response.data);
    return response.data;
};