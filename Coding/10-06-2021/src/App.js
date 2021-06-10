import {Redirect, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import HomePage from './screens/HomePage';
import Product from './screens/Product';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/homepage'/>
        </Route>
        <Route path='/homepage'>
          <HomePage />
        </Route>
        <Route path='/product' exact>
          <Product />
        </Route>
        <Route path='/product/:productId'>
          <ProductDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
