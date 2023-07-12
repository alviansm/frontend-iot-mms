'use client'

import Chart from "react-apexcharts";
import React, {Component, useState} from "react";

const LineChartTemperature = (props) => {
  const [options, setOptions] = useState({
    chart: {
      id: 'temperature-chart'
    },
    xaxis: {
      categories: ["0:34:01", "0:34:02", "0:34:03", "0:34:04", "0:34:05", "0:34:06", "0:34:07", "0:34:01"]
    }
  });
  const [series, setSeries] = useState([
    {
      name: 'Inlet Evap',
      data: [30, 31, 30, 31, 32, 33, 34, 34]
    },
    {
      name: 'Ambient',
      data: [28, 28, 29, 28, 28, 28, 29, 29]
    }
  ])

  return (
    <main className="mt-6">
      {(typeof window !== 'undefined') &&
      <Chart 
          options={props.options ? props.options : options}
          series={props.series ? props.series : series} 
          type="line" 
          width={620} 
          height={340} 
      />
      }
    </main>
  );
}

export default LineChartTemperature;