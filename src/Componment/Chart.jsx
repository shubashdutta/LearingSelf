import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const Chart = ({}) => {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Departmental Strength of a Company",
    },
    subtitle: {
      text: "Custom animation of pie series",
    },
    tooltip: {
      headerFormat: "",
      pointFormat:
        '<span style="color:{point.color}">\u25cf</span> {point.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        borderWidth: 2,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b><br>{point.percentage}%",
          distance: 20,
        },
      },
    },
    series: [
      {
        enableMouseTracking: false,
        animation: {
          duration: 2000,
        },
        colorByPoint: true,
        data: [
          {
            name: "Customer Support",
            y: 21.3,
          },
          {
            name: "Development",
            y: 18.7,
          },
          {
            name: "Sales",
            y: 20.2,
          },
          {
            name: "Marketing",
            y: 14.2,
          },
          {
            name: "Other",
            y: 25.6,
          },
        ],
      },
    ],
  };
  // const options = {
  //   chart: {
  //     type: "pie",
  //   },
  //   title: {
  //     text: "Sales Distribution by Product",
  //   },
  //   tooltip: {
  //     pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  //   },
  //   accessibility: {
  //     point: {
  //       valueSuffix: "%",
  //     },
  //   },
  //   plotOptions: {
  //     pie: {
  //       allowPointSelect: true,
  //       cursor: "pointer",
  //       dataLabels: {
  //         enabled: true,
  //         format: "<b>{point.name}</b>: {point.percentage:.1f} %",
  //       },
  //     },
  //   },
  //   series: [
  //     {
  //       name: "Sales",
  //       colorByPoint: true,
  //       data: [
  //         { name: "Product A", y: 35 },
  //         { name: "Product B", y: 25 },
  //         { name: "Product C", y: 20 },
  //         { name: "Product D", y: 10 },
  //         { name: "Product E", y: 10 },
  //       ],
  //     },
  //   ],
  // };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Chart;
