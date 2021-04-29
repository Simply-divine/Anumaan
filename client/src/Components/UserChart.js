import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const UserChart = () => {
  const [data, setData] = useState([]);
  const scores = useSelector((state) => state.auth.user.scores);
  useEffect(() => {
    const newData = [];
    scores.forEach((score, i) => {
      newData.push({ value: score, argument: i });
    });
    setData(newData);
  }, []);
  return (
    <Paper>
      <Chart data={data}>
        <ArgumentAxis />
        <ValueAxis />
        <LineSeries valueField='value' argumentField='argument' />
      </Chart>
    </Paper>
  );
};

export default UserChart;
