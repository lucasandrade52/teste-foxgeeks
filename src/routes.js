import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home'
import Wheel from './pages/Wheel'

export default function Routes() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/wheel" component={Wheel} />
      </Switch>
    </BrowserRouter>
    </>
  )
}