import  React from 'react';
// import ReactDOM from 'react-dom';

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './header'
import Main from './main'

const basicRoute = () => {
  return (
      <BrowserRouter>
        {/* <Switch>
          <Route exact path='/' component={Product}/>
          <Route exact path='/detail' component={Detail}/>
        </Switch> */}
        <div>
          <Header />
          <Main />
        </div>
      </BrowserRouter>
  )  
}

export default basicRoute
