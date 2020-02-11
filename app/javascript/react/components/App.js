import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AccountableIndex from './AccountableIndex'

export const App = (props) => {
return (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AccountableIndex} />
      </Switch>
    </BrowserRouter>
  </div>
)}

export default App
