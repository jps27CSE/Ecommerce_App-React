import './App.css';
import HomePage from './pages/homepage/HomePageComponent'
import { Route, Link, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shopComponent'
import Header from './components/header/headerComponent'
import SignInAndSignUpPage from './pages/signIn-and-signUp/signIn-and-signUp'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;