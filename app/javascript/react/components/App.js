import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AccountableIndex from './AccountableIndex'
import MonthsIndexContainer from './MonthsIndexContainer'
import MonthShowContainer from './MonthShowContainer'
import MapWithASearchBox from './MapWithASearchBox'
import EditMonthForm from './EditMonthForm'
import Contact from './Contact'
import About from './About'

export const App = (props) => {
return (
  <div className='test'>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ AccountableIndex } />
        <Route exact path="/months" component={ MonthsIndexContainer } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/contact" component={ Contact } />
        <Route exact path="/advisors" component={ MapWithASearchBox } />
        <Route exact path="/months/:id" component={ MonthShowContainer } />
        <Route exact path="/month/:id/edit" component={EditMonthForm} />
      </Switch>
    </BrowserRouter>
  </div>
)}

export default App
