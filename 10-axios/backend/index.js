import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: '1',
            name: 'Handsome Fit Shirt',
            category: 'Shirts',
            image: 'https://images.pexels.com/photos/30954525/pexels-photo-30954525/free-photo-of-elegant-woman-in-white-backless-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price: 100,
            brand: 'Adidas',
            rating: 4.0,
        },
        {
            id: '2',
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: 'https://images.pexels.com/photos/18194031/pexels-photo-18194031/free-photo-of-cute-girl-in-a-white-dress-standing-in-the-room.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            price: 100,
            brand: 'Adidas',
            rating: 4.0,
        },
        {
            id: '3',
            name: 'Lacoste Free Shirt',
            category: 'Dresses',
            image: 'https://images.pexels.com/photos/12657573/pexels-photo-12657573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price: 220,
            brand: 'Lacoste',
            rating: 4.8,
        },
        {
            id: '4',
            name: 'Rayban Strap Skirt',
            category: 'Skirts',
            image: 'https://images.pexels.com/photos/29303934/pexels-photo-29303934/free-photo-of-stylish-portrait-of-a-woman-in-striped-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price: 78,
            brand: 'Nike',
            rating: 4.5,
        }
    ];

    let result = products;

    // Filter if query parameter "search" is present
    if (req.query.search) {
        result = products.filter((product) =>
            product.name.toLowerCase().includes(req.query.search.toLowerCase())
        );
    }

    // Delay response to simulate async behavior
    setTimeout(() => res.json(result), 2000);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
