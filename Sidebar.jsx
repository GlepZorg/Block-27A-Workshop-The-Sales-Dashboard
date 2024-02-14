import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

const drawerWidth = 240;

function Sidebar() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem button key="Dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button key="FAQ">
          <ListItemIcon>
            <QuestionAnswerIcon />
          </ListItemIcon>
          <ListItemText primary="FAQ Page" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
