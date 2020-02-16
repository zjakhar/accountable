import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter, Link } from "react-router-dom"
Enzyme.configure({ adapter: new Adapter() })

import LineitemTile from "./LineitemTile"

describe("LineitemTile", () => {
  let wrapper
  let lineitemData

 beforeEach(() => {
   lineitemData = {
     id: 1,
     month_id: 9,
     user_id: 9,
     category: "income",
     lineitem: "paycheck",
     value: 890
   }

   wrapper = mount(
    <BrowserRouter>
      <LineitemTile
        lineitemData={ lineitemData }
      />
    </BrowserRouter>
   )
 })

 it("should render a tag with className lineitem containing the Lineitem received via props", () => {
   expect(wrapper.find('.lineitem').text()).toBe("paycheck: 890")
 });
})
