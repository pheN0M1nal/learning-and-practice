import './App.css';
import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import Favrotiespage from "./pages/Favrotiespage";
import Wishlistpage from './pages/Wishlistpage';
import Moviepage from './pages/Moviepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Wishlist from './components/Wishlist';


function App() {
  return (
    <Router>
      <div >
        <Header/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/fav' exact component={Favrotiespage}/>
          <Route path='/wish' exact component={Wishlistpage}/>
          <Route path='/movies' exact component={Moviepage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
