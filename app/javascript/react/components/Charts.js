import React from 'react';
import { Chart } from "react-google-charts";

const Charts = (props) => {
  let array = props.lineitems
  let emptyArray = [['LineItem', 'Value']]
    let chartData = array.map((item) =>{
      if(item.category === "expense") {
      emptyArray.push([item.lineitem, item.value])
      }
    })

  return (
    <div className = "column chart">
      <Chart
        width={'500px'}
        height={'300px'}
        size={'90px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={emptyArray}
        options={{
          title: `${props.month.month} expenses, you have $${props.remainingToBudget(props.lineitems)} left to budget to reach a zero based budget!`
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  )
}

export default Charts
