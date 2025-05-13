import React from 'react'
import css from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={css.home}>
    <h2> Contact manager welcome page{' '}
      <span role="img" aria-label="Greeting icon"><br/>
            💁‍♀️
      </span>
    </h2>
    </div>
  )
}

export default HomePage;
