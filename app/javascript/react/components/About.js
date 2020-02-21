import React from 'react'

const About = (props) => {
  return (
    <div>
      <div className="grid-x">
        <div className="about-header cell">
          <h1>About Accountable</h1>
        </div>
        <div className="about-intro cell">
          <h4>Accountable was founded in February of 2020 by Zain Jakhar while he was an Apprentice Web Developer at Launch Academy. The Purpose of Accountable is to have easy access to a zero based budgeting software. Easily track your income and expense, by budgeting them in advance.</h4>
        </div>
      </div>
      <div className="grid-x">
        <div className="about cell small-6">
          <img src="https://i.imgur.com/oLsFgGF.png" />
        </div>
        <div className="about about-graph cell small-6">
          <h2>Get personalized data visualization for your budget, this will allow you to have a better understanding of your expenses and how to optimize your spending.</h2>
        </div>
      </div>
      <div className="grid-x">
        <div className="about about-calendar cell small-6">
          <h2>Clearly organize and access your budgets using our Calendar page!</h2>
        </div>
          <div className="about cell small-6">
        <img src="https://i.imgur.com/AH7YjtA.png" />
        </div>
      </div>
      <div className="grid-x">
        <div className="about cell small-6 ">
          <img src="https://i.imgur.com/AabnrN4.png" />
        </div>
        <div className="about about-map cell small-6">
          <h2>Easily find local Financial Advisors</h2>
        </div>
      </div>
    </div>
  )
}

export default About
