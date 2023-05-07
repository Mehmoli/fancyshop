import axios from "axios";

export const fetchProduct = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}products`);
    console.log("Response is awesome");
    console.log(response.data);
    return response.data;
};