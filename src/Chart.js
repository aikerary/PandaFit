import ReactApexChart from 'react-apexcharts';
const Chart = ({ data, xaxis }) => {
  const options = {
    markers: {
      colors: ['#F44336']
   },
    chart: {
      id: 'basic-line',
      foreColor: '#ffffff', // Color de las etiquetas y la línea
    },
    xaxis: {
      categories: xaxis,
      labels: {
        style: {
          colors: '#ffffff', // Color de las etiquetas en el eje x
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#ffffff', // Color de las etiquetas en el eje y
        },
      },
    },
  };

  const series = [
    {
      name: 'Weight (kg)',
      data: data,
    },
  ];

  return (
    <div className='apeChar'>
      <ReactApexChart options={options} series={series} type="line" height={450} />
    </div>
  );
};

export default Chart;

