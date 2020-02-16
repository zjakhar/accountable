import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AccountableIndex from './AccountableIndex'
import MonthsIndexContainer from './MonthsIndexContainer'
import MonthShowContainer from './MonthShowContainer'

export const App = (props) => {
return (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ AccountableIndex } />
        <Route exact path="/months" component={ MonthsIndexContainer } />
        <Route exact path="/months/:id" component={ MonthShowContainer } />
      </Switch>
    </BrowserRouter>
  </div>
)}

export default App
