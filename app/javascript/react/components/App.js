import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AccountableIndex from './AccountableIndex'
import MonthsIndexContainer from './MonthsIndexContainer'
import MonthShowContainer from './MonthShowContainer'
import About from './About'
import Contact from './Contact'

export const App = (props) => {
return (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ AccountableIndex } />
        <Route exact path="/months" component={ MonthsIndexContainer } />
        <Route exact path="/months/:id" component={ MonthShowContainer } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/contact" component={ Contact } />
      </Switch>
    </BrowserRouter>
  </div>
)}

export default App
