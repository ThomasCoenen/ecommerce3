import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route} from 'react-router-dom';
import Homescreen from './Homescreen';
import Collections from './Collections';
import NewArrivals from './screens/NewArrivals';
import Tops from './screens/Tops';
import ProductScreen from './screens/ProductScreen';
import Search from './components/Search';
import Account from './components/Account';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { FaPaypal, FaCcVisa, FaInstagram, FaFacebookF } from 'react-icons/fa';
import CartScreen from './components/CartScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import Shoes from './screens/Shoes';
import Accessories from './screens/Accessories';

library.add(faStroopwafel)

function App(props) {
  const {name} = props

  return (
    
      <BrowserRouter>
        <div className="container">
          <h1 className="topsaying">FREE SHIPPING on orders $100+</h1>
          <Navbar />

          <main>
            <Route path="/cart/:id?/:name?" component={CartScreen}></Route>
            <Route path="/product/:id/:name" component={ProductScreen}></Route>
            <Route path="/collections" component={Collections}></Route>
            <Route path="/newarrivals" component={NewArrivals}></Route>
            <Route path="/tops" component={Tops}></Route>
            <Route path="/shoes" component={Shoes}></Route>
            <Route path="/accessories" component={Accessories}></Route>  
            <Route path="/search" component={Search}></Route>
            <Route path="/account" component={Account}></Route>
            <Route path="/register" component={Register} ></Route>
            <Route path="/forgotpassword" component={ForgotPassword} ></Route>
            <Route path="/shipping" component={ShippingAddressScreen} ></Route>
            <Route path="/payment" component={PaymentMethodScreen} ></Route>
            <Route path="/placeorder" component={PlaceOrderScreen} ></Route>
            <Route path="/order" component={OrderScreen} ></Route>
            <Route path="/orderhistory" component={OrderHistoryScreen} ></Route>
            <PrivateRoute 
              path="/profile" 
              component={ProfileScreen}>
            </PrivateRoute>
            <Route path="/" component={Homescreen} exact></Route>
          </main>

          <br />
          <footer className="footer">

            <div className="bottomlinks">
              <FaFacebookF />
              <FaInstagram />
              <FaInstagram />
            </div>

            <div className="bottommessage"> SureFire Commerce and Coenen Website Design.
            </div>

            <div className="payicons">
              <FaPaypal style={{color: 'blue'}} />
              <i>stripe</i>
              <FaCcVisa />
            </div>

          </footer>

        </div>

      </BrowserRouter>
  );
}

export default App;

//npm install gh-pages --save-dev
//git init
// git remote add origin https://github.com/ThomasCoenen/-EcommerceNS2.git
// git add .
//git commit -m "first commit"
//npm run deploy
//git push -u origin master
