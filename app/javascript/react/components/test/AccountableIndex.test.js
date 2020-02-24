import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter, Link } from "react-router-dom"
Enzyme.configure({ adapter: new Adapter() })

import AccountableIndex from "../AccountableIndex"

describe("AccountableIndex", () => {
  let wrapper

   wrapper = mount(
      <AccountableIndex />
   )

  it("should render a tag with className first-title containing text TAKE CONTROL OF YOUR FUTURE", () => {
   expect(wrapper.find('.first-title').text()).toBe("TAKE CONTROL OF YOUR FUTURE")
  });

  it("should render a tag with className first-check containing text Give Every Dollar a Purpose", () => {
   expect(wrapper.find('.first-check').text()).toBe(" Give Every Dollar a Purpose")
  });

  it("should render a tag with className second-check containing text Eliminate Debt", () => {
   expect(wrapper.find('.second-check').text()).toBe(" Eliminate Debt")
  });

  it("should render a tag with className third-check containing text Reduce Stress", () => {
   expect(wrapper.find('.third-check').text()).toBe(" Reduce Stress")
  });

  it("should render a tag with className second-title containing text CREATE MONTHLY BUDGETS TO HELP TAKE BACK CONTROL OF YOUR INCOME", () => {
   expect(wrapper.find('.second-title').text()).toBe("CREATE MONTHLY BUDGETS TO HELP TAKE BACK CONTROL OF YOUR INCOME")
  });

  it("should render a tag with className second-paragraph containing text The simple act of budgeting and determining your monies uses affects human behavior. Labeling our money’s uses, and the goods we purchase as an appropriate use for that money, leads to changed behavior. In the case of a budget, assigning our money leads to living within our means and saving money.", () => {
   expect(wrapper.find('.second-paragraph').text()).toBe("The simple act of budgeting and determining your monies uses affects human behavior. Labeling our money’s uses, and the goods we purchase as an appropriate use for that money, leads to changed behavior. In the case of a budget, assigning our money leads to living within our means and saving money.")
  });

  it("should render a tag with className third-title containing text NO LONGER LIVE WITH UNNECESSARY STRESS", () => {
   expect(wrapper.find('.third-title').text()).toBe("NO LONGER LIVE WITH UNNECESSARY STRESS")
  });

  it("should render a tag with className third-paragraph containing text Make a plan for your income. Accountable provides you with a template for budgeting your monthly expenses. When you know where you are spending your money, you will easily find ways to cut out unnecessary spending.", () => {
   expect(wrapper.find('.third-paragraph').text()).toBe("Make a plan for your income. Accountable provides you with a template for budgeting your monthly expenses. When you know where you are spending your money, you will easily find ways to cut out unnecessary spending.")
  });

  it("should render a tag with className fourth-title containing text FIND FINANCIAL PLANNERS NEAR YOU", () => {
   expect(wrapper.find('.fourth-title').text()).toBe("FIND FINANCIAL PLANNERS NEAR YOU")
  });

  it("should render a tag with className fourth-paragraph containing text Use our Google Maps feature to find Financial Planners in the city you live in.", () => {
   expect(wrapper.find('.fourth-paragraph').text()).toBe("Use our Google Maps feature to find Financial Planners in the city you live in.")
  });
})
