import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
// import BurgerIngrediant from './components/Burger/BurgerIngredients/BurgerIngredients';

function App() {
  return (
<div>
<Layout>
<BurgerBuilder/>
{/* <BurgerIngrediant/> */}
</Layout>
</div>
  )
}

export default App;
