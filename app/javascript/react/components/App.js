import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AccountableIndex from './AccountableIndex'
import MonthsIndex from './MonthsIndex'

export const App = (props) => {
return (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AccountableIndex} />
        <Route exact path="/months" component={MonthsIndex} />
      </Switch>
    </BrowserRouter>
  </div>
)}

export default App
