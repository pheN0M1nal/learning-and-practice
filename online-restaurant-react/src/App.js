import { useState, useEffect } from 'react';
import OrderListModal from './components/OrderListModal';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AllProducts from './pages/AllProducts';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [listIsOpen, setListIsOpen] = useState(false);

  return (
    <>
    <OrderListModal listIsOpen={listIsOpen} setListIsOpen={setListIsOpen}/>
    <div className={listIsOpen && 'hide'}>
      <Router>
          <Header setListIsOpen={setListIsOpen}/>
            <Switch>
              <Route path='/' exact component={Home}>
                <Home  listIsOpen={listIsOpen}/>
                </Route>
              <Route path='/all-products' exact component={AllProducts}/>
            </Switch>
       </Router>
    </div>
    </>
  );
}
export default App;
