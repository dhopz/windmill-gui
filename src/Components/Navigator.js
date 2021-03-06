import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
// import TimerIcon from '@mui/icons-material/Timer';
// import SettingsIcon from '@mui/icons-material/Settings';
// import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';



const categories = [
  {
    id: 'Inventory',
    children: [
      { id: 'Fulfilments',icon: <PeopleIcon /> },
      { id: 'Data', icon: <DnsRoundedIcon />, onClick:"/data"},
      { id: 'Storage', icon: <PermMediaOutlinedIcon /> },
      { id: 'Links', icon: <PublicIcon /> },
      { id: 'Orders', icon: <SettingsEthernetIcon /> },
      { id: 'Reconciliation', icon: <SettingsInputComponentIcon />,
      },
    ],
  },
  // {
  //   id: 'Reports',
  //   children: [
  //     { id: 'Analytics', icon: <SettingsIcon /> },
  //     { id: 'Performance', icon: <TimerIcon /> },
  //     { id: 'Test Lab', icon: <PhonelinkSetupIcon /> },
  //   ],
  // },
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;

  const navigate = useNavigate();

  const navigateToData = () => {
    // ??????? navigate to /
    navigate('/data');
}; 
  

  return (
      <Drawer variant="persistent" anchor='left' open {...other}>
        <List disablePadding>
          <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff', bgcolor:'#271c35ff' }}>
            Windmill Operations
          </ListItem>
          <ListItem sx={{ ...item, ...itemCategory, bgcolor:'#271c35ff' }}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Typography variant="body2" color="text.secondary" align="center">
              <Link  target="_blank" underline="none" color="#fff" href="https://www.windmillorganics.com/">
                NetSuite
              </Link>
            </Typography>
          </ListItem>
          {categories.map(({ id, children }) => (
            <Box key={id} sx={{ bgcolor: '#593f78ff' }}>
              <ListItem sx={{ py: 2, px: 3 }}>
                <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
              </ListItem>
              {children.map(({ id: childId, icon, active, onClick }) => (                
                  <ListItem disablePadding key={childId}>
                    <ListItemButton selected={active} sx={item}>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText primary={childId}>{childId}</ListItemText>
                      <Link onClick={navigateToData}></Link>
                    </ListItemButton>
                  </ListItem>
                
              ))}

              <Divider sx={{ mt: 2 }} />
            </Box>
          ))}
        </List>
      </Drawer>
  );
}