import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import http from '../utils/httpInstance';
import { Container, Typography } from '@material-ui/core';
import Loading from './Common/Loading';

const useStyles = makeStyles({
  something: {
    width: '100%',
    textAlign: 'center',
    margin: '50px',
  },
});

function createData(email, name, max_score) {
  return { email, name, max_score };
}

export default function Leaderboard() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await http({
          method: 'GET',
          url: '/users',
        });
        const { data: users } = res.data;
        const newrows = [];
        console.log(users);
        users.forEach((user) =>
          newrows.push(createData(user.email, user.name, user.max_score))
        );
        newrows.sort((user1, user2) => user1.max_score - user2.max_score);
        newrows.reverse();
        setRows(newrows);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <Container>
      <div className={classes.something}>
        <Typography variant='h5'>Leaderboard</Typography>
      </div>
      <TableContainer>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell align='right'>High Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <div style={{ margin: '20px' }}>
                <Loading varient='primary' />
              </div>
            ) : (
              rows.map((row) => (
                <TableRow key={row.email}>
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='right'>{row.max_score}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
