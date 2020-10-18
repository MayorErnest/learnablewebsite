import React from 'react';
import './App.css';
import Landing from './components/pages/LandingPage/Landing';
import Learnable from './components/pages/LearnablePage/Learnable';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/learnable" component={Learnable} />
        <Route path="/" exact component={Landing} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
