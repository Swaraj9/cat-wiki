import './styles/App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Breed from './pages/Breed';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path = '/breeds/:id'>
            <Breed/>
          </Route>
          <Route path = '/'>
            <Home/>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
