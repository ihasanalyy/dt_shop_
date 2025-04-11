import express from 'express';
import { serviceRoute, countriesRoute, operatorRoutes, productRoute } from '../Controllers/serviceController.js';
import { decryptData } from '../utils/encrypt.js';
const secretKey = Buffer.from('94f1cbe03759a4ff9df4bcbad4c9ed429cae04f2a8a59ec33eb30c1537287e24', 'hex');


const router = express.Router();

router.get('/services', serviceRoute);
 
router.get('/countries', countriesRoute)

router.get('/operators', operatorRoutes)

router.get('/products', productRoute)



// this route is just to check the data from encryption to decryption
router.post('/decrypt', async (req, res) => {
   const { iv, encryptedData } = req.body;
   console.log(iv, encryptedData, "req.body")
   const response = await decryptData(encryptedData, secretKey, iv);
   res.status(200).send(response);
   
})

export default router;