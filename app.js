import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './pages/HomePage';
import SnacksPage from './pages/SnacksPage';
import DrinksPage from './pages/DrinksPage';
import NotFoundPage from './pages/NotFoundPage';
import AddItemForm from './components/AddItemForm';
import { snacks, drinks } from './data/items';
import './App.css';

const App = () => {
  const [snackItems, setSnackItems] = React.useState(snacks);
  const [drinkItems, setDrinkItems] = React.useState(drinks);

  const addItem = (item) => {
    if (item.type === 'snack') {
      setSnackItems([...snackItems, { ...item, id: snackItems.length + 1 }]);
    } else {
      setDrinkItems([...drinkItems, { ...item, id: drinkItems.length + 1 }]);
    }
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage snacks={snackItems} drinks={drinkItems} />
        </Route>
        <Route path="/snacks">
          <SnacksPage items={snackItems} />
        </Route>
        <Route path="/drinks">
          <DrinksPage items={drinkItems} />
        </Route>
        <Route path="/add">
          <AddItemForm addItem={addItem} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
