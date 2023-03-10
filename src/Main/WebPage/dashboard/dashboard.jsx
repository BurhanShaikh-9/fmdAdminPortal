import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export const Dashboard = () => {
  const Line1 = {
    chart: {
      id: 'spark1',
      group: 'sparks',
      type: 'line',
      height: 80,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 2,
        opacity: 0.2,
      }
    },
    series: [{
      data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
    }],
    stroke: {
      curve: 'smooth'
    },
    markers: {
      size: 0
    },
    grid: {
      padding: {
        top: 20,
        bottom: 20,
        left: 20
      }
    },
    colors: ['#e92b2b'],
    tooltip: {
      x: {
        show: false
      },
    }
  }
  const chartOptions = {
    series: [100, 55],
    labels: ['Total', 'Active'],
    chart: {
      type: 'donut',
      toolbar: {
        show: true,
        tools: {
          download: true,
        },
      },
    },
    colors: ['#eb6363', '#e92b2b'],
    legend: {
      position: 'bottom'
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };
  const donutchart1 = {
    series: [100, 30],
    labels: ['Total Products', 'Out of Stock'],
    chart: {
      type: 'donut',
      toolbar: {
        show: true,
        tools: {
          download: true,
        },
      },
    },
    colors: ['#eb6363', '#e92b2b'],
    legend: {
      position: 'bottom'
    },
    dataLabels: {
      enabled: false
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };
  const areaChart1 = {
    chart: {
      type: 'area',
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
        },
      },
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 0,
    },
    xaxis: {
      show: false,
      labels: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    colors: ['#eb6363'],

    subtitle: {
      text: 'Total Doctor Bookings',
      offsetX: 30,
      style: {
        fontSize: '14px',
        // cssClass: 'apexcharts-yaxis-title'
      }
    },
    title: {
      text: '100',
      offsetX: 30,
      style: {
        fontSize: '24px',
        // cssClass: 'apexcharts-yaxis-title'
      }
    },
    series: [
      {
        name: 'Total Doctor Bookings',
        data: [20, 50, 30, 50, 20, 40, 20]
      }
    ]
  };
  const areaChart2 = {
    chart: {
      type: 'area',
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
        },
      },
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 0,
    },
    xaxis: {
      show: false,
      labels: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    colors: ['#eb6363'],

    subtitle: {
      text: 'Total Lab Bookings',
      offsetX: 30,
      style: {
        fontSize: '14px',
        // cssClass: 'apexcharts-yaxis-title'
      }
    },
    title: {
      text: '100',
      offsetX: 30,
      style: {
        fontSize: '24px',
        // cssClass: 'apexcharts-yaxis-title'
      }
    },
    series: [
      {
        name: 'Total Lab Bookings',
        data: [20, 50, 30, 50, 40, 40, 20]
      }
    ]
  };
  const areaChart3 = {
    chart: {
      type: 'area',
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
        },
      },
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false
    },

    fill: {
      opacity: 0,
    },
    xaxis: {
      show: false,
      labels: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    colors: ['#eb6363'],

    subtitle: {
      text: 'Total Product Sales',
      offsetX: 30,
      style: {
        fontSize: '14px',
        // cssClass: 'apexcharts-yaxis-title'
      }
    },
    title: {
      text: '100',
      offsetX: 30,
      style: {
        fontSize: '24px',
        // cssClass: 'apexcharts-yaxis-title'
      }
    },
    series: [
      {
        name: 'Total Lab Bookings',
        data: [20, 50, 30, 50, 40, 40, 20]
      }
    ]
  };
  const barChart = {
    chart: {
      type: 'bar'
    },
    series: [
      {
        name: 'Series 1',
        data: [30, 40, 45],
      }
    ],
    colors: ['#eb6363', '#e92b2b'],
    xaxis: {
      categories: ['Doctors', 'Labs', 'Pharmacy',]
    },
    yaxis: {
      labels: {
        show: false
      }
    },
  };
  const LineChart = {
    chart: {
      type: 'line',
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: false,
        },
      },
    },
    stroke: {
      width: 3,
      curve: 'smooth'
    },
    colors: ['#ff0000','#eb6363', '#f13e3e'],
    series: [
      {
        name: 'Insurance A',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 150, 200, 190]
      },
      {
        name: 'Insurance B',
        data: [90, 90, 80, 104, 53, 60, 80, 61, 125, 150, 200, 120]
      },
      {
        name: 'Insurance C',
        data: [200, 190, 45, 104, 53, 40, 45, 61, 125, 150,  60, 70]
      }
    ],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  };


  return (
    <>
      <section className='mainSection'>
        <div className="container">
          <div className="mainSectionWrapper">
            <div className="heading">
              <p>
                Dashboard
              </p>
            </div>
            <div className="card cardForm">
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 ">
                    <div className="card">
                      <div className="card-body">
                        <div className="chart">
                          <div className="chartHeading">
                            <p>Category</p>
                            <small>Current</small>
                          </div>
                          <div className="box box1">
                            <div className="details">
                              <p className='category'>140</p>
                              <p>Categories</p>
                            </div>
                            <ReactApexChart options={Line1} series={Line1.series} type="line" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 ">
                    <div className="card">
                      <div className="card-body">
                        <div className="chart">
                          <div className="chartHeading">
                            <p>Category</p>
                            <small>Current</small>
                          </div>
                          <div className="box box1">
                            <div className="details">
                              <p className='category'>140</p>
                              <p>Categories</p>
                            </div>
                            <ReactApexChart options={Line1} series={Line1.series} type="line" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 ">
                    <div className="card">
                      <div className="card-body">
                        <div className="chart">
                          <div className="chartHeading">
                            <p>Category</p>
                            <small>Current</small>
                          </div>
                          <div className="box box1">
                            <div className="details">
                              <p className='category'>140</p>
                              <p>Categories</p>
                            </div>
                            <ReactApexChart options={Line1} series={Line1.series} type="line" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 ">
                    <div className="card">
                      <div className="card-body">
                        <div className="chart">
                          <div className="chartHeading">
                            <p>Users</p>
                            <small>Current</small>
                          </div>
                          <ReactApexChart options={chartOptions} series={chartOptions.series} type="donut" height={300} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 ">
                    <div className="card">
                      <div className="card-body">
                        <div className="chart">
                          <div className="chartHeading">
                            <p>Products</p>
                            <small>Current</small>
                          </div>
                          <ReactApexChart options={donutchart1} series={donutchart1.series} type="donut" height={300} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 ">
                    <div className="card">
                      <div className="card-body">
                        <div className="chart">
                          <div className="chartHeading">
                            <p>Clients</p>
                            <small>Current</small>
                          </div>
                          <ReactApexChart options={barChart} series={barChart.series} type="bar" height={245} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 ">
                    <div className="card">
                      <div className="card-body">
                        <div className="chart">
                          <div className="chartHeading">
                            <p>Total Doctor Bookings</p>
                            <small>Weekly</small>
                          </div>
                        </div>
                      </div>
                      <ReactApexChart options={areaChart1} series={areaChart1.series} type="area" height={255} />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 ">
                    <div className="card">
                      <div className="card-body">
                        <div className="chart">
                          <div className="chartHeading">
                            <p>Total Lab Bookings</p>
                            <small>Weekly</small>
                          </div>
                        </div>
                      </div>
                      <ReactApexChart options={areaChart2} series={areaChart2.series} type="area" height={255} />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 ">
                    <div className="card">
                      <div className="card-body">
                        <div className="chart">
                          <div className="chartHeading">
                            <p>Total Product Sales</p>
                            <small>Weekly</small>
                          </div>
                        </div>
                      </div>
                      <ReactApexChart options={areaChart3} series={areaChart3.series} type="area" height={255} />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 ">
                    <div className="card">
                      <div className="card-body">
                        <div className="chart">
                          <div className="chartHeading">
                            <p>Insurance</p>
                            <small>Yearly</small>
                          </div>
                        </div>
                      </div>
                      <ReactApexChart options={LineChart} series={LineChart.series} type="line" height={350} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
