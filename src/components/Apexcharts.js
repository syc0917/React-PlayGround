import React, { useState, Component } from 'react';
import Chart from "react-apexcharts";

export default function Apexcharts(props){
    const [selectedPoint, setSelectedPoint] = useState({dataPointIndex: 0})
    const [options, setOptions] = useState({
        chart: {
            id: "basic-bar",
            events: {
                dataPointSelection: (event, chartContext, config) => {
                  console.log("Trigger Event")
                //   console.log(event)
                //   console.log(chartContext)
                  console.log(config)
                  setSelectedPoint(config)
                }
            }
        },
        xaxis: {
            type: 'category',
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        },
    })
    const [series, setSeries] = useState([
        {
            name: "series-1",
            data: [{
                x: 'Apple',
                y: 54
            }, {
                x: 'Orange',
                y: 66
            }],
        },
        {
            name: "series-2",
            data: [{
                x: 'Apple',
                y: 54
            }, {
                x: 'Orange',
                y: 66
            }],
        }
    ])
    return(
        <>
            <Chart
                options={options}
                series={series}
                type="bar"
                width="500"
            />
            {`selected point was index ${selectedPoint.dataPointIndex}, series ${selectedPoint.seriesIndex}`}
        </>
    )
}