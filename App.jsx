import React from 'react';
import { CssBaseline, Box, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Dashboard from './Dashboard';
import TransactionList from './TransactionList';

const drawerWidth = 240;

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            The King's Restaurant
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <QuestionAnswerIcon />
              </ListItemIcon>
              <ListItemText primary="FAQ Page" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Dashboard />
        <Divider />
        <TransactionList />
      </Box>
    </Box>
  );
}

export default App;
