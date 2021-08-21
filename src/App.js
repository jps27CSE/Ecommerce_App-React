import './App.css';
import HomePage from './pages/homepage/HomePageComponent'
import { Route, Link, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shopComponent'
import Header from './components/header/headerComponent'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;