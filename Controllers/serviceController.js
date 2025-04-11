import { getHelperAllServices, getHelperAllCountries, getHelperAllOperators, getHelperAllProducts, getHelperAllProductsById, getHelperProductsByRegion } from '../Helper/serviceHelper.js';

export const getAllServices = async () => {
    try {
        const services = await getHelperAllServices();
        return (services);
    } catch (error) {
        return ({ message: error.message });
    }
}
export const getSpecificServices = async (id) => {
    try {
        const services = await getHelperAllServices(id);
        // res.status(200).send(services);
        return services;
    } catch (error) {
        return ({ message: error.message });
    }
}
export const getAllCountries = async () => {
    try {
        const countries = await getHelperAllCountries();
        return (countries);
    } catch (error) {
        return ({ message: error.message });
    }
}
export const getSpecificCountries = async (iso_code) => {
    try {
        const countries = await getHelperAllCountries(iso_code);
        return (countries);
    } catch (error) {
        return ({ message: error.message });
    }
}
export const getAllOperators = async () => {
    try {
        const operators = await getHelperAllOperators();
        return (operators);
    } catch (error) {
        return ({ message: error.message });
    }
}
export const getSpecificOperators = async (id) => {
    try {
        const operators = await getHelperAllOperators(id);
        return (operators);
    } catch (error) {
        return ({ message: error.message });
    }
}
export const getAllProducts = async (productId) => {
    if (productId){
        try {
            const products = await getHelperAllProductsById(productId);
            return (products);
        } catch (error) {
            return ({ message: error.message });
        }
    }
    else {
        try {
            const products = await getHelperAllProducts();
            return (products);
        } catch (error) {
            return ({ message: error.message });
        }
    }
    
}
export const getSpecificProducts = async (service_id, country_iso_code) => {
    console.log(service_id, country_iso_code, "true nahi hue");
    if (service_id && country_iso_code) {
        try {
            const products = await getHelperAllProducts(service_id, country_iso_code);
            return (products);
        } catch (error) {
            return ({ message: error.message });
        }
    }
    //     try {
    //         const products = await getHelperAllProducts(service_id, country_iso_code);
    //         return(products);
    //     } catch (error) {
    //         return({ message: error.message });
    //     }
    // }
}
export const getProductsByRegion = async (region) => {
    if (region) {
        try {
            const products = await getHelperProductsByRegion(region);
            return (products);
        } catch (error) {
            return ({ message: error.message });
        }
    }
}