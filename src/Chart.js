import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Chart = ({ data, xaxis }) => {
  const options = {
    chart: {
      id: 'basic-line'
    },
    xaxis: {
      categories: xaxis
    }
  };

  const series = [
    {
      name: 'Series 1',
      data: data
    }
  ];

  return (
    <div>
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default Chart;
