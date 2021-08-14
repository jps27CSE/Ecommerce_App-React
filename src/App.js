import './App.css';
import HomePage from './pages/homepage/HomePageComponent'
import { Route, Link } from 'react-router-dom'
import ShopPage from './pages/shop/shopComponent'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;