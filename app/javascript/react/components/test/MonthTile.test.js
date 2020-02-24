import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter, Link } from "react-router-dom"
Enzyme.configure({ adapter: new Adapter() })

import MonthTile from "../MonthTile"

describe("MonthTile", () => {
  let wrapper
  let monthData

 beforeEach(() => {
   monthData = {
     id: 1,
     month: "January"
   }

   wrapper = mount(
    <BrowserRouter>
      <MonthTile
        monthData={ monthData }
      />
    </BrowserRouter>
   )
 })

 it("should render a tag with className month-text containing the month received via props", () => {
   expect(wrapper.find('.month-text').text()).toBe("January")
 });
})
