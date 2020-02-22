import React from 'react';
import { Chart } from "react-google-charts";

const Charts = (props) => {
  let lineitemArray = props.lineitems
  let array = [['LineItem', 'Value']]
    let chartData = lineitemArray.map((item) =>{
      if(item.category === "Expense") {
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
          title: `Expense Chart: You have $${props.remainingToBudget(props.lineitems)} left to budget to reach a zero based budget!`,
          is3D: true,
          backgroundColor:'transparent'
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  )
}

export default Charts
