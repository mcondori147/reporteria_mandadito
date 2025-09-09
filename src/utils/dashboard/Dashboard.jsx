import * as React from 'react';

import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from './components/AppNavbar';
import Header from './components/Header';
import MainGrid from './components/MainGrid';
import SideMenu from './components/SideMenu';
import AppTheme from '../shared-theme/AppTheme';
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from './theme/customizations';

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};
import DashboardFront from '../dashboard-frontEnd/DashboardFront';
import { useState

 } from 'react';
export default function Dashboard(props) {
  const [valueScreen, setValueScreen] = useState('FrontEnd'); // 'FrontEnd' | 'Backend'
  const handleChangeScreen = (next) => {
    // Validación simple por si quieres limitar valores
    if (next === 'FrontEnd' || next === 'Backend') {
      setValueScreen(next);
    }
  };
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu  onChangeScreen={handleChangeScreen}/>
        <AppNavbar />
        {/* Main content */}
        {/* <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />
            <MainGrid />
          </Stack>
        </Box> */}

        {/* <DashboardFront></DashboardFront> */}
        {valueScreen === 'FrontEnd' && (
        <section>
          <h2>Reportería FrontEnd</h2>
          <DashboardFront></DashboardFront>
        </section>
      )}

        {valueScreen === 'Backend' && (
          <section>
            <h2>Reportería Backend</h2>
          </section>
        )}
      </Box>
    </AppTheme>
  );
}
