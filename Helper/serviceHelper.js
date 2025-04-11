import axios from "axios";
import { encryptData } from "../utils/encrypt.js";

// const user = "f6b0e14f-1312-4ba9-8122-0d914e0284d6";
// const password = "fcaf97e1-03a4-46cc-a2fb-a6aecd688752";
// const authHeader = `Basic ${Buffer.from(`${user}:${password}`).toString('base64')}`;
const auth_token = 'Basic Njg3ZmZlNDAtNTU3Yi00OGQxLTg5ZGItMmFiZGNjZjgzOGZmOmJkZTBkZDEyLTk2NGYtNGFhNy04YWNiLTlkMDQ0NjUwM2U3Nw=='

export const getHelperAllServices = async (id) => {
    try {
        if (id) {
            const response = await axios.get(`https://dvs-api.dtone.com/v1/services/${id}`, {
                headers: {
                    Authorization: auth_token,
                },
            });
            return await encryptData(response.data)
        } else {
            const response = await axios.get('https://dvs-api.dtone.com/v1/services', {
                headers: {
                    Authorization: auth_token,
                },
            });
            return await encryptData(response.data)
        }
    } catch (error) {
        return ({ message: error.message });
    }
}
export const getHelperAllCountries = async (iso_code) => {
    try {
        if (iso_code) {
            const response = await axios.get(`https://dvs-api.dtone.com/v1/countries/${iso_code}`, {
                headers: {
                    Authorization: auth_token,
                },
            });
            return await encryptData(response.data)
        } else {
            const response = await axios.get('https://dvs-api.dtone.com/v1/countries', {
                headers: {
                    Authorization: auth_token,
                },
            });
            return await encryptData(response.data)
        }
    } catch (error) {
        return ({ message: error.message });
    }
}
export const getHelperAllOperators = async (id) => {
    try {
        if (id) {
            const response = await axios.get(`https://dvs-api.dtone.com/v1/operators/${id}`, {
                headers: {
                    Authorization: auth_token,
                },
            });
            return await encryptData(response.data)
        } else {
            const response = await axios.get('https://dvs-api.dtone.com/v1/operators', {
                headers: {
                    Authorization: auth_token,
                },
            });
            return await encryptData(response.data)
        }
    } catch (error) {
        return ({ message: error.message });
    }
}
export const getHelperAllProducts = async (service_id, country_iso_code, productId) => {
    try {
        if (service_id && country_iso_code) {
            const response = await axios.get(`https://dvs-api.dtone.com/v1/products?service_id=${service_id}&country_iso_code=${country_iso_code}`, {
                headers: {
                    Authorization: auth_token,
                },
            });
            console.log(response.data, "response")
            return await encryptData(response.data)
        }
        // if (productId) {
        //     console.log(productId, "main api ke ander productId")
        //     const response = await axios.get(`https://dvs-api.dtone.com/v1/products/${productId}`, {
        //         headers: {
        //             Authorization: auth_token,
        //         },
        //     });
        //     return await cleanResponse([response.data]);
        // } 
        else {
            const response = await axios.get('https://dvs-api.dtone.com/v1/products', {
                headers: {
                    Authorization: auth_token,
                },
            });
            return await encryptData(response.data)
        }
    } catch (error) {
        return ({ message: error.message });
    }
}
export const getHelperAllProductsById = async (productId) => {
    try {
        const response = await axios.get(`https://dvs-api.dtone.com/v1/products/${productId}`, {
            headers: {
                Authorization: auth_token,
            },
        });
        return await encryptData(response.data);
        // return response.data;
    } catch (error) {
        return ({ message: error.message });
    }
}
export const getHelperProductsByRegion = async (region) => {
    try {
        const response = await axios.get(`https://dvs-api.dtone.com/v1/products?country_iso_code=${region}`, {
            headers: {
                Authorization: auth_token,
            },
        });
        return await encryptData(response.data)
    } catch (error) {
        return ({ message: error.message });
    }
}
// const cleanResponse = (data) => {
//     // console.log(data,"data")
//     return data.map((data) => ({
//         productId: data.id,
//         operatorId: data.operator.id,
//         name: data.name,
//         availableZone: data.availability_zones,
//         description: data.description,
//         daysValidity: data.pin.validity.quantity,
//         unitValidity: data.pin.validity.unit,
//         operator: data.operator?.name || "N/A",
//         price: data.destination?.amount || "N/A",
//         currency: data.destination?.unit || "N/A",
//         retailPrice: data?.prices?.retail,
//         // wholesalePrice: data?.source?.amount,
//         wholesalePriceUnit: data?.source?.unit,
//         validity: `${data.validity?.quantity || "N/A"} ${data.validity?.unit || "N/A"}`,
//         type: data.type,
//         service: data.service?.name || "N/A"
//     }));
// };
