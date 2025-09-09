import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Copyright from '../../dashboard/internals/components/Copyright';
import ChartUserByCountry from './ChartUserByCountry';
import CustomizedTreeView from '../../dashboard/components/CustomizedTreeView';
import CustomizedDataGrid from '../../dashboard/components/CustomizedDataGrid';
import HighlightedCard from '../../dashboard/components/HighlightedCard';
import PageViewsBarChart from './PageViewsBarChart';
import SessionsChart from '../../dashboard/components/SessionsChart';
import StatCard from '../../dashboard/components/StatCard';

const data = [
  {
    title: 'Performance',
    value: '',
    interval: 'Last 30 days',
    trend: 'up',
    data: [
      89, 90 , 89, 91 , 96
    ],
  },
  {
    title: 'Accessibility',
    value: '',
    interval: 'Last 30 days',
    trend: 'up',
    data: [
      89, 90 , 89, 91 , 96
    ],
  },
  {
    title: 'SEO',
    value: '',
    interval: 'Last 30 days',
    trend: 'up',
    data: [
      89, 90 , 89, 91 , 96
    ],
  }
];

const datav2 = [
  {
    title: 'Performance',
    name: 'Valor:',
    value: 90,
    flag: 'X',
    color: 'hsla(209, 100%, 79%, 1.00)',
  },
  {
    title: 'Accessibility',
    name: 'Valor:',
    value: 96,
    flag: 'X',
    color: 'hsla(209, 100%, 79%, 1.00)',
  },
  {
    title: 'SEO',
    name: 'Valor:',
    value: 92,
    flag: 'X',
    color: 'hsla(209, 100%, 79%, 1.00)',
  }
];

const bestpractice = [
  {
    title: 'Best practice',
    value: '',
    interval: ' -- ',
    trend: 'neutral',
    data: [
      50, 56, 50, 52 , 50
    ],
  }
];

const bestpracticev2 = [
  {
    title: 'Best practice',
    name: 'Valor:',
    value: 54,
    flag: 'X',
    color: 'hsla(209, 100%, 79%, 1.00)',
  }
];

export default function MainGrid() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
       <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Detalles rendimiento en Front End
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
         {datav2.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
            <ChartUserByCountry {...card} /> 
          </Grid>
        ))}

        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
            <StatCard {...card} /> 
          </Grid>
        ))}
      </Grid>

      <Grid   container
              spacing={2}
              columns={12}
              sx={{ mb: (theme) => theme.spacing(2) }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Grid>
            <ChartUserByCountry {...bestpracticev2[0]} /> 
          </Grid>
         <Grid>
            <StatCard {...bestpractice[0]} />  
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <PageViewsBarChart />
        </Grid>
      </Grid>
   
      {/* <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 4  }}>
            <ChartUserByCountry />
        </Grid>
         <Grid size={{ xs: 12, lg: 4  }}>
            <ChartUserByCountry />
        </Grid>
         <Grid size={{ xs: 12, lg: 4  }}>
            <ChartUserByCountry />
        </Grid>
      </Grid> */}
      {/* <Copyright sx={{ my: 4 }} /> */}
    </Box>
  );
}
