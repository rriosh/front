import React from 'react';
import moment from 'moment';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import Title from './Title';

// Generate Sales Data
const today = new Date();
const data = [];

for (let index = 1; index <= String(today.getDate()).padStart(2, '0'); index++) {
  const element = {
    day: index,
    tickets1: Math.floor(Math.random()*1000),
    tickets2: Math.floor(Math.random()*1000)
  };
  data.push(element);
}

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 240,
  }
}));

const Chart = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Paper className={fixedHeightPaper}>
      <Title>Boletos canjeados en el mes de {moment().format("MMMM")}</Title>
      <ResponsiveContainer>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="tickets1" fill="#8884d8" />
        <Bar yAxisId="right" dataKey="tickets2" fill="#82ca9d" />
      </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
}

export default Chart;