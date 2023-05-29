import ReactApexChart from 'react-apexcharts';

const Chart = ({ data, xaxis }) => {
  const options = {
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
      name: 'Series 1',
      data: data,
    },
  ];

  return (
    <div>
      <ReactApexChart options={options} series={series} type="line" height={450} />
    </div>
  );
};

export default Chart;

