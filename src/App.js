import './App.css';
import HomePage from './pages/homepage/HomePageComponent'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shopComponent'
import Header from './components/header/headerComponent'
import SignInAndSignUpPage from './pages/signIn-and-signUp/signIn-and-signUp'
import React from 'react'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {

  constructor() {
    super()

    this.state =
    {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }

}

export default App;