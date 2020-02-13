import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AccountableIndex from './AccountableIndex'
import MonthsIndexContainer from './MonthsIndexContainer'

export const App = (props) => {
return (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AccountableIndex} />
        <Route exact path="/months" component={MonthsIndexContainer} />
      </Switch>
    </BrowserRouter>
  </div>
)}

export default App
