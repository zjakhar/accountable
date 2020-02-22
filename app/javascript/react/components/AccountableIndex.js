import React from 'react'
import { Link } from 'react-router-dom'

const AccountableIndex = (props) => {
  return (
    <div className="test">
      <section className="special" data-scrollax-parent="true">
        <div className="cover" data-scrollax="properties: { translateY: '30%' }"><img src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" /></div>
        <div className="content">
          <div className="text centralize">
            <div data-scrollax="properties: { 'translateY': '150%', 'opacity': 1.5 }">
              <header className="major">
                <h1>TAKE CONTROL OF YOUR FUTURE</h1>
              </header>
              <p className="welcome"><i class="fas fa-check"></i> Give Every Dollar a Purpose</p><p className="welcome"><i class="fas fa-check"></i> Eliminate Debt</p><p className="welcome"><i class="fas fa-check"></i> Reduce Stress</p>
              <a href="/users/sign_up" className="button">JOIN FOR FREE</a>
            </div>
          </div>
        </div>
      </section>

      <section className="special" data-scrollax-parent="true">
        <div className="cover" data-scrollax="properties: { translateY: '30%' }"><img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" /></div>
        <div className="content">
          <div className="text centralize">
            <div data-scrollax="properties: { 'translateY': '150%', 'opacity': 1.5 }">
              <header className="major">
                <h3>CREATE MONTHLY BUDGETS TO HELP TAKE BACK CONTROL OF YOUR INCOME</h3>
              </header>
              <p className="welcome">The simple act of budgeting and determining your monies uses affects human behavior. Labeling our money’s uses, and the goods we purchase as an appropriate use for that money, leads to changed behavior. In the case of a budget, assigning our money leads to living within our means and saving money.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="special" data-scrollax-parent="true">
        <div className="cover" data-scrollax="properties:  { translateY: '30%' }">
          <img src="https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80" />
        </div>
        <div className="content">
          <div className="text centralize">
            <div data-scrollax="properties: { 'translateY': '150%', 'opacity': 1.5 }">
              <header className="cell small-6 major">
                <h3 className="">NO LONGER LIVE WITH UNNECESSARY STRESS</h3>
              </header>
              <p className="welcome">Make a plan for your income. Accountable provides you with a template for budgeting your monthly expenses. When you know where you are spending your money, you will easily find ways to cut out unnecessary spending.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="special" data-scrollax-parent="true">
        <div className="cover" data-scrollax="properties: { translateY: '30%' }"><img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" /></div>
        <div className="content">
          <div className="text centralize">
            <div data-scrollax="properties: { 'translateY': '150%', 'opacity': 1.5 }">
              <header className="major">
                <h3>FIND FINANCIAL PLANNERS NEAR YOU</h3>
              </header>
              <p className="welcome">Use our Google Maps feature to find Financial Planners in the city you live in.</p>
              <a href="/users/sign_up" className="button">JOIN FOR FREE</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AccountableIndex
