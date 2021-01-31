import React, {useState, useEffect} from 'react'
import { Link} from 'react-router-dom';
import mainimg from './images/main.jpg';
import welcome from './images/welcome.jpg';
import './App.css';
import Product from './screens/Product.js';
import MessageBox from './components/MessageBox.js';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from './actions/productActions';
import addToMailchimp from "gatsby-plugin-mailchimp"
import data from './data/data.js' 

export default function Homescreen() {
    const [email, setEmail] = useState('')
    //REDUX 
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await addToMailchimp(email)
    }

    return (
        <div>
            <br />
            <div className="mainpiccontainer">
                <img className="mainpic" src={mainimg} alt=""/>
            </div>
            <br />
            
            <div className="shopnowcontainer">
                <Link to="/collections" className="shopnowlink" style={{textDecoration: "none"}}>
                    <button className="shopnowbutton">Shop Now</button>
                </Link>
            </div>

            <br />
            <br />
            <div className="favorites">
                <h1>Our Favorites</h1>

                {
                loading ? (
                    <></>
                )
                :
                error ? (<MessageBox variant="danger">{error}</MessageBox>)
                : (
                    <div className="favoriterroducts">
                        { 
                            data.favorites.map((product) => (
                                    <Product key={product._id} product={product} name={product.category}></Product>
                                )  
                        )
                        }
                    </div>
                )
                }

            </div>

            <br />
            <div>

            <form className="form subscribe" onSubmit={handleSubmit}>
                <h1>Be the first to get the Business!!</h1>
                <h2>shoot us your email and we will be sure to notify you as new products come in!</h2>
                <input
                    className="subscribeinput"
                    placeholder="email"
                    id="outlined-email-input"
                    label="Email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    variant=""
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    className="shopnowbutton"
                    variant="contained"
                    color="primary"
                    label="Submit"
                    type="submit"
                    >Subscribe
                </button>
            </form>

            </div>

            <br />
            <div className="aboutsection">
                <div className="aboutstatement">
                    <h1 className="">Happy Shopping!</h1>
                    <p className="aboutmessage">Welcome all! I want everyone to feel welcome here. If there is a product you'd like to request, please don't hesitate to contact us.     </p>
                </div>
                <div className="aboutimgcontainer">
                    <img className="aboutpic" src={welcome} alt=""/>
                </div>
            </div>
        </div>
    )
}
