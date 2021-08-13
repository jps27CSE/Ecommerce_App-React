import './App.css';
import HomePage from './pages/homepage/HomePageComponent'
import { Route, Link } from 'react-router-dom'

const HatsPage = (props) => {
  return (
    <div>

      <h1>Hats Page</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
