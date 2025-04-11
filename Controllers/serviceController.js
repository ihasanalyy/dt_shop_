import { getSpecificServices, getAllServices, getSpecificCountries, getAllCountries, getAllOperators, getSpecificOperators, getAllProducts, getSpecificProducts, getProductsByRegion  } from "../utils/helper.js";




export const serviceRoute = async (req, res) => {
    const { id } = req.query;
    console.log(id, "req");
  
    try {
      if (id) {
        const response = await getSpecificServices(id);
        return res.status(200).send(response);
      } else {
        const response = await getAllServices();
        return res.status(200).send(response);
      }
    } catch (error) {
      console.error("Error in /services route:", error.message);
      return res.status(500).send({ message: "Internal server error" });
    }
};
export const countriesRoute = async (req, res) => {

      const { iso_code } = req.query;
      console.log(iso_code, "req");
  
      try {
        if (iso_code) {
          const response = await getSpecificCountries(iso_code);
          return res.status(200).send(response);
        } else {
          const response = await getAllCountries();
          return res.status(200).send(response);
        }
      } catch (error) {
        console.error("Error in /countries route:", error.message);
        return res.status(500).send({ message: "Internal server error" });
      }
    
};
export const operatorRoutes = async (req, res) => {
    const { id } = req.query;
    console.log(id, "req");
  
    try {
      if (id) {
        const response = await getSpecificOperators(id);
        return res.status(200).send(response);
      } else {
        const response = await getAllOperators();
        return res.status(200).send(response);
      }
    } catch (error) {
      console.error("Error in /operators route:", error.message);
      return res.status(500).send({ message: 'Internal server error' });
    }
  
}
export const productRoute = async (req, res) => {
    const { service_id, country_iso_code, product_Id } = req.query;
    console.log(service_id, country_iso_code, product_Id, "req");
  
    try {
      if (service_id && country_iso_code) {
        const response = await getSpecificProducts(service_id, country_iso_code);
        return res.status(200).send(response);
      } 
      else if (product_Id) {
        console.log(product_Id, "product_Id ke ander");
        const response = await getAllProducts(product_Id);
        return res.status(200).send(response);
      } 
      else if (country_iso_code) {
        const response = await getProductsByRegion(country_iso_code);
        return res.status(200).send(response);
      } 
      else {
        const response = await getAllProducts();
        return res.status(200).send(response);
      }
    } catch (error) {
      console.error('Error in /products route:', error);
      return res.status(500).send({ message: 'Internal server error' });
    }
};
