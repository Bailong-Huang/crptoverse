import React from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const LineChart = ({coinHistory, currentPrice, coinName}) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for(let i =coinHistory?.data?.history?.length-1; i>=0; i--){
        coinPrice.push(coinHistory?.data?.history[i].price);
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp*1000).toLocaleDateString());
    };

    const data = {
        labels: coinTimestamp,
        datasets: [
          {
            label: `Price of ${coinName} in USD`,
            data: coinPrice,
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
          },
        ],
      };

    const options = {
        scales: {
          y: {
            ticks: {
              beginAtZero: true,
            },
          },
        },
      };


    return (
        <>
            <Row className='chart-header' >
                <Title level={2} className='chart-title' >{coinName} Price Chart</Title>
                <Col className='price-container' >
                    <Title level={5} className='price-change' >{coinHistory?.data?.change}%</Title>
                    <Title level={5} className='current-price' >Current {coinName} Price: ${currentPrice} </Title>
                </Col>
            </Row>
            <Line data={data} options={options} />
        </>
    )
}

export default LineChart