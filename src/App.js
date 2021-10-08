
import './App.css';

import Header from './components/Header';
import Home from './components/Home';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Header - top part of the site*/}
        {/* Home - rest of the code */}
        <Switch>

          <Route path = "/checkout">
              <Header/>
              <Checkout/>
          </Route>


          <Route path = "/">
            {/* Default route */}
             <Header />
             <Home/>
          </Route>


        </Switch>
  
      </div>
    </Router>
  );
}

export default App;
