import fav1 from '../images/bluetee.jpg';
import fav2 from '../images/bluetee2.jpg';
import fav3 from '../images/greentee2.png';
import fav4 from '../images/greentee.jpg';
import fav5 from '../images/kidsshirt.jpg';
import shoes1 from '../images/shoes1.jpg';
import shoes2 from '../images/shoes2.jpg';
import shoes3 from '../images/shoes3.jpg';
import shoes4 from '../images/shoes4.jpg';
import watch1 from '../images/watch1.jpg';
import watch2 from '../images/watch2.jpg';
import watch3 from '../images/watch2.jpg';

const data = {
    users: [
        {
            firstname: "Tom",
            lastname: "Smith",
            email: 'admin@example.com',
            isAdmin: true
        },
        {
            firstname: "John",
            lastname: "Smith",
            email: 'john@example.com',
            isAdmin: false
        }
    ],
    favorites: [
        {
            _id: '1',
            name: 'fav111',
            category: "favorites",
            type: 'Shirts',
            image: fav1,
            price: 750,
            description: 'high quality product',
            countInStock: 2,
            brand: 'dsafa',
            rating: 4.5,
            numReviews: 10

        },
        {
            _id: '2',
            name: 'fav2',
            category: "favorites",
            type: 'Shirts',
            image: fav2,
            price: 1000,
            description: 'high quality product',
            countInStock: 2,
            brand: 'dsafa',
            rating: 4.5,
            numReviews: 10
        },
        {
            _id: '3',
            name: 'fav3',
            category: "favorites",
            type: 'Shirts',
            image: fav3,
            price: 800,
            description: 'high quality product',
            countInStock: 2,
            brand: 'dsafa',
            rating: 4.5,
            numReviews: 10
        },
        {
            _id: '4',
            name: 'fav4',
            category: "favorites",
            type: 'Shirts',
            image: fav4,
            price: 500,
            description: 'high quality product',
            countInStock: 2,
            brand: 'dsafa',
            rating: 4.5,
            numReviews: 10
        },
        {
            _id: '5',
            name: 'fav5',
            category: "favorites",
            type: 'Shirts',
            image: fav5,
            price: 500,
            description: 'high quality product',
            countInStock: 2,
            brand: 'dsafa',
            rating: 4.5,
            numReviews: 10
        },
    ],

    newarrivals: [
        {
            _id: '7',
            name: 'newarrivals1',
            category: "newarrivals",
            type: 'tops',
            image: shoes4,
            price: 500,
            description: 'high quality product',
            countInStock: 3,
            brand: 'dsafa',
            rating: 4.5,
            numReviews: 10
        },
    ],

    tops: [
        {
            _id: '11',
            name: 'top1',
            category: "tops",
            type: 'tops',
            image: fav1,
            price: 500,
            description: 'high quality product',
            countInStock: 10,
            brand: 'dsafa',
            rating: 4.5,
            numReviews: 10
        },
        {
            _id: '12',
            name: 'top2',
            category: "tops",
            type: 'tops',
            image: fav2,
            price: 500,
            description: 'high quality product',
            countInStock: 20,
            brand: 'dsafa',
            rating: 4.5,
            numReviews: 10
        },
        {
            _id: '13',
            name: 'top3',
            category: "tops",
            type: 'bottoms',
            image: fav3,
            price: 500,
            description: 'high quality product',
            countInStock: 6,
            brand: 'dsafa',
            rating: 4.5,
            numReviews: 10
        },
        {
            _id: '14',
            name: 'top4',
            category: "tops",
            type: 'shoes',
            image: fav4,
            price: 500,
            description: 'high quality product',
            countInStock: 3,
            brand: 'dsafa',
            rating: 4.5,
            numReviews: 10
        },

    ],

    shoes: [
        {
            _id: '11',
            name: 'shoes1',
            category: "shoes",
            type: 'tops',
            image: shoes1,
            price: 500,
            description: 'high quality product',
            countInStock: 10,
            brand: 'dsafa',
            rating: 4.5,
            numReviews: 10
        },
        {
            _id: '12',
            name: 'shoes2',
            category: "shoes",
            type: 'tops',
            image: shoes2,
            price: 500,
            description: 'high quality product',
            countInStock: 20,
            brand: 'dsafa',
            rating: 4.5,
            numReviews: 10
        },
        {
            _id: '13',
            name: 'shoes3',
            category: "shoes",
            type: 'bottoms',
            image: shoes3,
            price: 500,
            description: 'high quality product',
            countInStock: 6,
            brand: 'dsafa',
            rating: 4.5,
            numReviews: 10
        },
        {
            _id: '13',
            name: 'shoes3',
            category: "shoes",
            type: 'bottoms',
            image: shoes4,
            price: 500,
            description: 'high quality product',
            countInStock: 6,
            brand: 'dsafa',
            rating: 4.5,
            numReviews: 10
        },

    ],

    accessories: [
        {
            _id: '11',
            name: 'accessory1',
            category: "accessories",
            type: 'tops',
            image: watch1,
            price: 500,
            description: 'high quality product',
            countInStock: 10,
            brand: 'dsafa',
            rating: 4.5,
            numReviews: 10
        },
        {
            _id: '12',
            name: 'accessory2',
            category: "accessories",
            type: 'tops',
            image: watch2,
            price: 500,
            description: 'high quality product',
            countInStock: 20,
            brand: 'dsafa',
            rating: 4.5,
            numReviews: 10
        },
        {
            _id: '13',
            name: 'accessory3',
            category: "accessories",
            type: 'bottoms',
            image: watch3,
            price: 500,
            description: 'high quality product',
            countInStock: 6,
            brand: 'dsafa',
            rating: 4.5,
            numReviews: 10
        },

    ]
}

export default data;


