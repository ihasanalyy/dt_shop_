import express from 'express';
import { getAllServices, getSpecificServices, getAllCountries, getSpecificCountries, getAllOperators, getSpecificOperators, getAllProducts, getSpecificProducts, getProductsByRegion } from '../Controllers/serviceController.js';
import { decryptData } from '../utils/encrypt.js';
const secretKey = Buffer.from('94f1cbe03759a4ff9df4bcbad4c9ed429cae04f2a8a59ec33eb30c1537287e24', 'hex');


const router = express.Router();
// this includes two routes, one for getting all services and one for getting a specific service by id ==>> service?id=13
router.get('/services', async (req, res) => {
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
 });
 

// this includes two routes, one for getting all countries and one for getting a specific country by iso_code ==>> countries?iso_code=PAK
router.get('/countries', async (req, res) => {
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
 });
 
router.get('/operators', async (req, res) => {
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
 });
 
router.get('/products', async (req, res) => {
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
 });
 



// this route is just to check the data from encryption to decryption
router.post('/decrypt', async (req, res) => {
   const { iv, encryptedData } = req.body;
   console.log(iv, encryptedData, "req.body")
   const response = await decryptData(encryptedData, secretKey, iv);
   res.status(200).send(response);
   
})

export default router;