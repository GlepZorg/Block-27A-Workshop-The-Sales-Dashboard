import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';


const statistics = [
    { label: 'Sales Obtained', value: '431,225', icon: null, change: '+21%' },
    { label: 'New Clients', value: '32,441', icon: null, change: '+5%' },
    { label: 'Traffic Received', value: '1,325,134', icon: null, change: '+43%' },
  ];

function Dashboard() {
  return (
    <Grid container spacing={2}>
      {statistics.map((stat, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h6">{stat.label}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {stat.icon}
              <Typography variant="h4">{stat.value}</Typography>
            </Box>
            <Typography variant="subtitle1" sx={{ alignSelf: 'flex-start' }}>
              {stat.change}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default Dashboard;
