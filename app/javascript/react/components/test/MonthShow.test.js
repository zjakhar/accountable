import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter, Link } from "react-router-dom"
Enzyme.configure({ adapter: new Adapter() })

import MonthShow from "../MonthShow"

describe("MonthShow", () => {
  let wrapper
  let month

 beforeEach(() => {
   month = {
     id: 1,
     month: "JANUARY"
   }

   wrapper = mount(
    <BrowserRouter>
      <MonthShow
        month={ month }
      />
    </BrowserRouter>
   )
 })

 it("should render a tag with className month-title containing the Month Name received via props", () => {
   expect(wrapper.find('.month-title').text()).toBe("YOUR BUDGET FOR JANUARY")
 });
})
