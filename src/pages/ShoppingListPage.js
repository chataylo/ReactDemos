import React from 'react';
import logo from '../images/logo.svg';
import '../styles/ShoppingList.scss';
import SimpleShoppingList from '../components/SimpleShoppingList'

function ShoppingListPage() {
  return (
    <div className="lightPage">
      <SimpleShoppingList/>
    </div>
  );
}

export default ShoppingListPage;
