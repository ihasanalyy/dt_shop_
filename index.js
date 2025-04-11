import express from 'express';
import Main from './Routes/serviceRoutes.js';

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', Main)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});