import React, { Fragment } from 'react'

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}> {/*  - 가 들어가므로 점표기법 안하고 []로 감싸줘야함*/}
        <img src={mealsImage} alt="A table full of delicious food!"/>
      </div>
    </Fragment>
  )
}

export default Header