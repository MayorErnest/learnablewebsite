import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../HomePage/Home';
import Softwaredeveloper from '../SoftwareDeveloperPage/Softwaredeveloper';
import ProductDesigner from '../ProductDesignerPage/ProductDesigner';
import LearnableNavbar from './LearnableNavbar';
import './Learnable.css';

function Learnable() {
    return (
        <div className="l-Container">
            <Router>
                <LearnableNavbar/>
                <Switch>
                    <Route path="/learnable" component={Home} />
                    <Route path="/softwaredeveloper" component={Softwaredeveloper} />
                    <Route path="/productdesigner" component={ProductDesigner} />
                </Switch>
            </Router>
            
        </div>
    )
}



export default Learnable;
