import React from 'react';
import { Chart } from "react-google-charts";

const IncomeChart = (props) => {
  let lineitemArray = props.lineitems
  let array = [['LineItem', 'Value']]
    let chartData = lineitemArray.map((item) =>{
      if(item.category === "Income") {
      array.push([item.lineitem, item.value])
      }
    })

  return (
    <div className = "column chart">
      <Chart
        width={'600px'}
        height={'400px'}
        size={'90px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={array}
        options={{
          title: `Sources of Income:`,
          is3D: true,
          backgroundColor:'transparent'
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  )
}

export default IncomeChart
