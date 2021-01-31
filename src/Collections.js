import React from 'react'
import { Route, Switch, Link} from 'react-router-dom';
import shoes3 from './images/shoes3.jpg';
import watch3 from './images/watch3.jpg';
import greentee from './images/greentee.jpg';
import racoontee from './images/racoontee.jpg';

import './App.css';
import NewArrivals from './screens/NewArrivals';


export default function Collections() {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Catelog</h1>
            <div className="collections">            
                <div className="collectionsproduct">
                    <Link to="/newarrivals" className="itemname">
                        <img className="image_prod" src={racoontee} alt=""/>
                        <h1>New Arrivals</h1>
                    </Link>
                </div>
                <div className="collectionsproduct">
                    <Link to="/tops" className="itemname">
                        <img className="image_prod" src={greentee} alt=""/>
                        <h1>T-Shirts</h1>
                    </Link>
                </div>
                <div className="collectionsproduct">
                    <Link to="/shoes" className="itemname">
                        <img className="image_prod" src={shoes3} alt=""/>
                        <h1>Shoes</h1>
                    </Link>
                </div>
                <div className="collectionsproduct">
                    <Link to="/accessories" className="itemname">
                        <img className="image_prod" src={watch3} alt=""/>
                        <h1>Accessories</h1>
                    </Link>
                </div>
            </div>

          <Switch>
            <Route path="/newarrivals">
              <NewArrivals />
            </Route>
          </Switch>

        </div>
    )
}
